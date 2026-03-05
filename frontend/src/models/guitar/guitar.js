import { gltfLoader } from "../gltf-loader/gltf-loader";
import * as THREE from "three";
import { addHaloGlow, addTemporaryGlow } from "./animations/animations";
import { Stickers } from "../stickers/stickers";
import { Textures } from "../textures/textures";

export class Guitar {
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  textureLoader = new THREE.TextureLoader();
  helper = new THREE.Object3D();
  color = new THREE.Color(0x616161);

  camera = {};
  scene = {};
  intersectedObject = {};
  stickers = new Stickers();
  textures = new Textures(this);
  isStickerOn = false;
  lastRotate = 0;
  currentHovered = null;
  glowMeshHover = null;

  constructor(scene, camera) {
    this.camera = camera;
    this.scene = scene;
    gltfLoader(scene, camera);
    document.addEventListener("stickerSelected", (e) => {
      this.isStickerOn = true;
    });
    document.addEventListener("textureChange", (e) => {
      this.updateIntersectedObjectTexture(e.detail);
    });
  }

  changeIntersectedObject(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(
      this.scene.children,
      true,
    );

    if (intersects.length === 0) return;

    const selectedGuitarPart = intersects[0].object.name
      ? intersects[0]
      : intersects[1];

    const position = selectedGuitarPart.point;
    this.intersectedObject = selectedGuitarPart.object;

    const selectedGuitarPartDOM = document.querySelector(
      "#selected-guitar-part",
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
        this.scene,
      );
      return;
    }

    addTemporaryGlow(this.intersectedObject, this.scene);

    const eventUI = new CustomEvent("guitarPartSelected", {
      detail: this.intersectedObject,
    });
    document.dispatchEvent(eventUI);
  }

  updateIntersectedObjectTexture(texture) {
    const clickedTexture = this.textureLoader.load(texture);

    clickedTexture.wrapS = THREE.RepeatWrapping;
    clickedTexture.wrapT = THREE.RepeatWrapping;

    clickedTexture.repeat.set(1, 1);

    this.intersectedObject.material.map = clickedTexture;
    this.intersectedObject.material.color.set(0xffffff);
  }

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
