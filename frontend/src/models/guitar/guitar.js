import { gltfLoader } from "../gltf-loader/gltf-loader";
import * as THREE from "three";
import { uploadImageToIndexedDb } from "../../utils/upload-image-to-indexed-db";
import { addHaloGlow, addTemporaryGlow } from "./animations/animations";
import { Stickers } from "../stickers/stickers";

export class Guitar {
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  textureLoader = new THREE.TextureLoader();
  helper = new THREE.Object3D();
  color = new THREE.Color(0x616161);

  camera = {};
  scene = {};
  intersectedObject = {};
  stickers = new Stickers(this);
  isStickerOn = false;

  constructor(scene, camera) {
    this.camera = camera;
    this.scene = scene;
    gltfLoader(scene, camera);
    document.addEventListener("stickerSelected", (e) => {
      this.isStickerOn = true;
    });
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
      this.stickers.applySticker(
        position,
        this.intersectedObject,
        this.helper,
        this.scene
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

    clickedTexture.wrapS = THREE.RepeatWrapping;
    clickedTexture.wrapT = THREE.RepeatWrapping;

    clickedTexture.repeat.set(1, 1);

    this.intersectedObject.material.map = clickedTexture;
    this.intersectedObject.material.color.set(0xffffff);
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
