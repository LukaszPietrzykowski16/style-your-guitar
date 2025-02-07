import { gltfLoader } from "../gltf-loader/gltf-loader";
import * as THREE from "three";

export class Guitar {
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  camera;
  scene;

  intersectedObject = {};

  canvas = document.querySelector("canvas");

  constructor(scene, camera) {
    this.camera = camera;
    this.scene = scene;
    gltfLoader(scene, camera);
    this.initListningForClick();
  }

  initListningForClick() {
    this.canvas.addEventListener(
      "click",
      (event) => {
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

        // if (isStickerOn) {
        //   isStickerOn = false;
        //   applySticker(
        //     position,
        //     intersects[0].face.normal,
        //     this.intersectedObject
        //   );
        //   return;
        // }

        this.addTemporaryGlow();

        // appereanceControlIcon.style.display = "none";
        showApperenaceControlMenu();
        updateActiveElement();
      },
      false
    );
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
        this.scene.remove(glowMesh);
        glowMesh.geometry.dispose();
        glowMesh.material.dispose();
      }
    }

    animateGlow();
  }
}
