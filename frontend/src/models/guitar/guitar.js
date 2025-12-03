import { gltfLoader } from "../gltf-loader/gltf-loader";
import * as THREE from "three";
import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";
import { uploadImageToIndexedDb } from "../../utils/upload-image-to-indexed-db";
import { removeSelectedStickerLabel } from "../../utils/remove-selected-sticker-label";
import { addHaloGlow, addTemporaryGlow } from "./animations/animations";

export class Guitar {
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  textureLoader = new THREE.TextureLoader();
  helper = new THREE.Object3D();
  color = new THREE.Color(0x616161);

  camera = {};
  scene = {};
  intersectedObject = {};
  selectedSticker = {};
  isStickerOn = false;
  stickersProxy = new Proxy([], {
    set(target, property, value) {
      target[property] = value;
      this.updateView(target);
      return true;
    },

    updateView(targets) {
      document.querySelector("#sticker-config").innerHTML = `
      ${targets
        .map(
          (target) =>
            `
          <div class="texture-card-wrapper">
                <div class="texture-card-actions with-thumb">
              <div class="texture-card thumb" style="background-image: url(${target.textureUrl});"></div>
              <div class="action-buttons">
                <button class="remove-sticker" data-value="${target.texture.uuid}"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg> </button>
                <button class="mirror-sticker" data-value="${target.texture.uuid}"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M360-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160v80H200v560h160v80Zm80 80v-880h80v880h-80Zm160-80v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80q0 33-23.5 56.5T760-120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z"/></svg> </button>
              </div>
            </div>
            <div class="texture-card-controls">
              <div class="control-group">
                <p class="control-label">Sticker Size</p>
                <input type="range" min="0.1" max="3.0" step="0.1" value="1.0" id="sticker-size" />
              </div>
              <div class="control-group">
                <p class="control-label">Sticker Rotation (deg)</p>
                <input type="range" min="0" max="360" step="1" value="0" id="sticker-rotation" />
              </div>
            </div>
      
          </div>
          `
        )
        .join("")}
    `;
    },
  });

  constructor(scene, camera) {
    this.camera = camera;
    this.scene = scene;
    gltfLoader(scene, camera);
  }

  changeIntersectedObject(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(
      this.scene.children,
      true
    );

    if (intersects.length === 0) return;

    const selectedGuitarPart = intersects[0].object.name
      ? intersects[0]
      : intersects[1];

    const position = selectedGuitarPart.point;
    this.intersectedObject = selectedGuitarPart.object;

    const selectedGuitarPartDOM = document.querySelector(
      "#selected-guitar-part"
    );
    if (selectedGuitarPartDOM) {
      selectedGuitarPartDOM.textContent = this.intersectedObject.name;
    }

    if (this.isStickerOn) {
      this.isStickerOn = false;
      this.applySticker(
        position,
        selectedGuitarPart.face.normal,
        this.intersectedObject
      );
      return;
    }

    addTemporaryGlow(this.intersectedObject, this.scene);

    const eventUI = new CustomEvent("guitarPartSelected");
    document.dispatchEvent(eventUI);
  }

  changeIntersectedObjectMaterialColor(materialColor) {
    this.intersectedObject.material.color.set(materialColor);
  }

  changeIntersectedObjectMaterialRoughness(roughness) {
    this.intersectedObject.material.roughness = roughness;
  }

  changeIntersectedObjectMaterialMetalness(metalness) {
    this.intersectedObject.material.metalness = metalness;
  }

  updateIntersectedObject(intersectedObject) {
    this.intersectedObject = intersectedObject;
  }

  updateIntersectedObjectTexture(texture) {
    const clickedTexture = this.textureLoader.load(texture);
    this.intersectedObject.material.map = clickedTexture;
    this.intersectedObject.material.color.set(0xffffff);
  }

  removeDecalByUUID(uuid) {
    const decalIndex = this.stickersProxy.findIndex(
      (decal) => decal.texture.uuid === uuid
    );

    console.log(uuid);

    this.scene.remove(this.stickersProxy[decalIndex].texture);

    this.stickersProxy.splice(decalIndex, 1);

    if (!this.stickersProxy.length) {
      document.querySelector("#sticker-config").innerHTML =
        "Please select sticker";
    }
  }

  mirrorDecalByUUID(uuid) {
    const entry = this.stickersProxy.find(
      (decal) => decal.texture.uuid === uuid
    );
    if (!entry) return;

    const decalMesh = entry.texture;
    const ud = decalMesh.userData || {};

    if (!ud.targetObject || !ud.position || !ud.orientation || !ud.size) return;

    const newEuler = ud.orientation.clone();
    newEuler.y += Math.PI;

    const newGeometry = new DecalGeometry(
      ud.targetObject,
      ud.position.clone(),
      newEuler,
      ud.size.clone()
    );

    decalMesh.geometry?.dispose?.();
    decalMesh.geometry = newGeometry;

    decalMesh.userData.orientation = newEuler.clone();
  }

  rotateDecalByUUID(uuid, deltaDeg = 15) {
    const entry = this.stickersProxy.find(
      (decal) => decal.texture.uuid === uuid
    );
    if (!entry) return;

    const decalMesh = entry.texture;
    const ud = decalMesh.userData || {};

    if (!ud.targetObject || !ud.position || !ud.orientation || !ud.size) {
      decalMesh.rotation.z = THREE.MathUtils.degToRad(deltaDeg);
      return;
    }

    const newEuler = ud.orientation.clone();
    newEuler.z += THREE.MathUtils.degToRad(deltaDeg);

    const newGeometry = new DecalGeometry(
      ud.targetObject,
      ud.position.clone(),
      newEuler,
      ud.size.clone()
    );

    decalMesh.geometry?.dispose?.();
    decalMesh.geometry = newGeometry;
    decalMesh.userData.orientation = newEuler;
  }

  async updateIntersectedObjectTextureFromFile(file) {
    const textureContainers = document.querySelectorAll(".texture-container");

    const blobUrl = await uploadImageToIndexedDb(file);

    if (textureContainers.length > 0) {
      const container = textureContainers[0];
      const div = document.createElement("div");
      div.className = "texture-card";
      div.style.backgroundImage = `url('${blobUrl}')`;

      if (container.children.length >= 1) {
        container.insertBefore(div, container.children[1]);
      } else {
        container.appendChild(div);
      }
    }
  }

  async updateSelectedStickerFromFile(file) {
    const stickerContainers = document.querySelectorAll(".sticker-container");

    const blobUrl = await uploadImageToIndexedDb(file);

    if (!blobUrl) return;

    if (stickerContainers.length > 0) {
      const container = stickerContainers[0];
      const div = document.createElement("div");
      div.className = "texture-card";
      div.style.backgroundImage = `url('${blobUrl}')`;

      if (container.children.length >= 1) {
        container.insertBefore(div, container.children[1]);
      } else {
        container.appendChild(div);
      }
    }
  }

  lastRotate = 0;

  rotateTexture(newRotate) {
    const texture = this.intersectedObject.material.map;
    if (texture) {
      const delta = newRotate - this.lastRotate;
      texture.rotation += THREE.MathUtils.degToRad(delta);
      texture.needsUpdate = true;
      this.lastRotate = newRotate;
    }
  }

  moveX(x) {
    const texture = this.intersectedObject.material.map;
    if (texture) {
      texture.offset.x = x;
      texture.needsUpdate = true;
    }
  }

  moveY(y) {
    const texture = this.intersectedObject.material.map;
    if (texture) {
      texture.offset.y = y;
      texture.needsUpdate = true;
    }
  }

  zoomInOutTexture(zoomValue) {
    if (!this.intersectedObject.originalRepeat) {
      this.intersectedObject.originalRepeat =
        this.intersectedObject.material.map.repeat.clone();
    }

    const texture = this.intersectedObject.material.map;
    if (texture) {
      texture.repeat
        .copy(this.intersectedObject.originalRepeat)
        .multiplyScalar(zoomValue);
      texture.needsUpdate = true;
    }
  }

  applySticker(position, normal, object) {
    removeSelectedStickerLabel();

    const decalMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      depthWrite: false,
      depthTest: true,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      transparent: true,
      map: this.selectedSticker,
      specular: 0x444444,
      wireframe: false,
    });

    const sizeVal =
      parseFloat(document.querySelector("#sticker-size")?.value) || 1.0;

    const rotDeg =
      parseFloat(document.querySelector("#sticker-rotation")?.value) || 0;

    // Set orientation using the helper object (degrees -> radians)
    this.helper.rotation.set(0, 0, THREE.MathUtils.degToRad(rotDeg));

    const sizeVec = new THREE.Vector3(sizeVal, sizeVal, sizeVal);

    const decalGeometry = new DecalGeometry(
      this.intersectedObject,
      position.clone(),
      this.helper.rotation.clone(),
      sizeVec.clone()
    );
    const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);

    // Store params to allow future transforms (rotate/scale)
    decalMesh.userData = {
      isDecal: true,
      targetObject: this.intersectedObject,
      position: position.clone(),
      orientation: this.helper.rotation.clone(),
      size: sizeVec.clone(),
    };

    this.stickersProxy.push({
      textureUrl: decalMesh.material.map.image.src,
      texture: decalMesh,
    });
    this.scene.add(decalMesh);
    this.selectedSticker = {};
  }

  putStickerOnTheGuitar(sticker) {
    const clickedSticker = this.textureLoader.load(sticker);
    this.selectedSticker = clickedSticker;
    this.isStickerOn = true;
  }

  currentHovered = null;
  glowMeshHover = null;

  toggleHoverText(show) {
    const hoverText = document.getElementById("hover-text");
    hoverText.style.display = show ? "block" : "none";
  }

  addTextOnHover(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children);

    const isDecal = intersects[0]?.object?.userData?.isDecal === true;

    if (isDecal) return;

    const hoverText = document.getElementById("hover-text");
    if (!hoverText) return;

    hoverText.style.left = event.clientX - 50 + "px";
    hoverText.style.top = event.clientY - 50 + "px";

    if (intersects.length > 0) {
      const intersectedObject = intersects[0]?.object;
      if (!intersectedObject) return;

      if (this.currentHovered?.name !== intersectedObject?.name) {
        if (this.glowMeshHover) {
          this.scene.remove(this.glowMeshHover);
          this.glowMeshHover.geometry?.dispose?.();
          this.glowMeshHover.material?.dispose?.();
          this.glowMeshHover = null;
        }
      }

      if (!this.glowMeshHover && !this.isStickerOn) {
        this.toggleHoverText(true);
        this.currentHovered = intersectedObject;

        if (this.isStickerOn) return;

        this.glowMeshHover = addHaloGlow(intersectedObject, 0xffffff, 1, 0.3);
        if (this.glowMeshHover) {
          this.scene.add(this.glowMeshHover);
        }
      }
    } else {
      if (this.glowMeshHover) {
        this.toggleHoverText(false);
        this.scene.remove(this.glowMeshHover);
        this.glowMeshHover.geometry?.dispose?.();
        this.glowMeshHover.material?.dispose?.();
        this.glowMeshHover = null;
        this.currentHovered = null;
      }
    }
  }
}
