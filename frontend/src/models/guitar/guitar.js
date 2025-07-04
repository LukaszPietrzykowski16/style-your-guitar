import { gltfLoader } from "../gltf-loader/gltf-loader";
import * as THREE from "three";
import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";

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
            `<div class="texture-card" style="background-image: url(${target.textureUrl})"> <span class="remove-sticker" data-value="${target.texture.uuid}"> Remove </span> </div>`
        )
        .join("")}
    `;
    },
  });

  constructor(scene, camera) {
    this.camera = camera;
    this.scene = scene;
    gltfLoader(scene, camera);
    // this.initListningForRotate();
  }

  addHaloGlow(object, glowColor, sizeMultiplier, glowIntensity) {
    if (this.isStickerOn) return;
    const glowGeometry = object.geometry.clone();
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: glowColor,
      transparent: true,
      opacity: glowIntensity,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMesh.scale.multiplyScalar(sizeMultiplier);
    glowMesh.position.copy(object.position);
    glowMesh.rotation.copy(object.rotation);
    glowMesh.position.y = 0.1;

    return glowMesh;
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
    this.intersectedObject = {
      ...this.intersectedObject,
      ...selectedGuitarPart.object,
    };

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

    this.addTemporaryGlow();

    const eventUI = new CustomEvent("guitarPartSelected");
    document.dispatchEvent(eventUI);
  }

  addTemporaryGlow() {
    const glowMesh = this.addHaloGlow(this.intersectedObject, 0xffffff, 1, 8);

    this.scene.add(glowMesh);

    this.fadeOutGlow(glowMesh, 800);
  }

  fadeOutGlow(glowMesh, duration) {
    const startTime = performance.now();

    const animateGlow = () => {
      const elapsed = performance.now() - startTime;
      const progress = elapsed / duration;

      if (progress < 1) {
        glowMesh.material.opacity = 0.5 * (1 - progress);
        requestAnimationFrame(animateGlow);
      } else {
        this.scene.remove(glowMesh);
        glowMesh.geometry.dispose();
        glowMesh.material.dispose();
      }
    };

    animateGlow();
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
    this.intersectedObject = {
      intersectedObject,
      ...searchedelement,
    };
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
    const updatedStickers = this.stickersProxy.filter((sticker) => {
      sticker.texture.uuid === decalIndex;
    });

    this.scene.remove(this.stickersProxy[decalIndex].texture);

    this.stickersProxy.splice(decalIndex, 1);

    if (!this.stickersProxy.length) {
      document.querySelector("#sticker-config").innerHTML =
        "Please select sticker";
    }
  }

  updateIntersectedObjectTextureFromFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(e.target.result, (loadedTexture) => {
        loadedTexture.needsUpdate = true;
      });
      this.intersectedObject.material.map = texture;
    };
    reader.readAsDataURL(file);
  }

  updateSelectedStickerFromFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target?.result;
      localStorage.setItem("uploadedImage", imageDataUrl);
    };
    reader.readAsDataURL(file);

    const savedImage = localStorage.getItem("uploadedImage");
    const stickerContainer = document.querySelectorAll(".sticker-container");

    if (savedImage && stickerContainer.length > 0) {
      const div = document.createElement("div");
      div.className = "texture-card";
      div.style.backgroundImage = `url('${savedImage}')`;

      const container = stickerContainer[0];
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
    // TODO: move  this to ui-controler
    document.querySelectorAll(".selected").forEach((el) => {
      el.classList.remove("selected");
      const label = el.querySelector(".selected-label");
      if (label) label.remove();
    });

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

    const decalGeometry = new DecalGeometry(
      this.intersectedObject,
      position,
      this.helper.rotation,
      new THREE.Vector3(0.5, 0.5, 0.5)
    );
    const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);

    decalMesh.userData.isDecal = true;

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
        this.glowMeshHover = this.addHaloGlow(
          intersectedObject,
          0xffffff,
          1,
          0.3
        );
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
