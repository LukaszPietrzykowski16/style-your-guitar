import { gltfLoader } from "../gltf-loader/gltf-loader";
import * as THREE from "three";
import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";

export class Guitar {
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  textureLoader = new THREE.TextureLoader();
  helper = new THREE.Object3D();

  camera = {};
  scene = {};
  intersectedObject = {};
  selectedSticker = {};
  isStickerOn = false;

  constructor(scene, camera) {
    this.camera = camera;
    this.scene = scene;
    gltfLoader(scene, camera);
    // this.initListningForRotate();
  }

  addHaloGlow(object, glowColor, sizeMultiplier, glowIntensity) {
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
    const position = intersects[0].point;
    this.intersectedObject = {
      ...this.intersectedObject,
      ...intersects[0].object,
    };

    if (this.isStickerOn) {
      this.isStickerOn = false;
      this.applySticker(
        position,
        intersects[0].face.normal,
        this.intersectedObject
      );
      return;
    }

    this.addTemporaryGlow();
  }

  addTemporaryGlow() {
    const glowMesh = this.addHaloGlow(this.intersectedObject, 0xffffff, 1, 8);

    this.scene.add(glowMesh);

    this.fadeOutGlow(glowMesh, 800);
  }

  fadeOutGlow(glowMesh, duration) {
    const startTime = performance.now();

    function animateGlow() {
      const elapsed = performance.now() - startTime;
      const progress = elapsed / duration;

      if (progress < 1) {
        glowMesh.material.opacity = 0.5 * (1 - progress);
        requestAnimationFrame(animateGlow);
      } else {
        // this.scene.remove(glowMesh);
        glowMesh.geometry.dispose();
        glowMesh.material.dispose();
      }
    }

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
    this.scene.add(decalMesh);
  }

  putStickerOnTheGuitar(sticker) {
    const clickedSticker = this.textureLoader.load(sticker);
    this.selectedSticker = clickedSticker;
    this.isStickerOn = true;
  }
}
