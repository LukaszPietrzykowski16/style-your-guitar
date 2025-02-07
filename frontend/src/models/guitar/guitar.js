import { gltfLoader } from "../gltf-loader/gltf-loader";
import * as THREE from "three";
import { showApperenaceControlMenu } from "../../main";

export class Guitar {
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  textureLoader = new THREE.TextureLoader();
  camera;
  scene;

  intersectedObject = {};

  canvas = document.querySelector("canvas");

  constructor(scene, camera) {
    this.camera = camera;
    this.scene = scene;
    gltfLoader(scene, camera);
    this.initListningForClick();
    this.mapGuitarElements();
    this.initListiningForInput();
    this.initListiningForColorContainer();
    this.initListiningForTextureContainer();
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
        this.updateActiveElement();
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

  // move all to the ui
  updateActiveElement() {
    const activeElement = document.querySelector("#active-element");
    const colorInput = document.querySelector("#color-picker");
    const roughnessInput = document.querySelector("#roughness");
    const metalnessInput = document.querySelector("#metalness");

    colorInput.value = `#${this.intersectedObject.material.color.getHexString()}`;

    roughnessInput.value = this.intersectedObject.material.roughness;
    metalnessInput.value = this.intersectedObject.material.metalness;

    activeElement.innerHTML = `Active element: ${this.intersectedObject.name}`;
  }

  mapGuitarElements() {
    const guitarElements = document.querySelectorAll("#guitar-elements");

    guitarElements.forEach((guitarElement) => {
      guitarElement.addEventListener("click", (element) => {
        const searchedelement = this.scene.getObjectByName(element.target.id);
        this.intersectedObject = {
          ...this.intersectedObject,
          ...searchedelement,
        };

        updateActiveElement(this.intersectedObject.name);
      });
    });
  }

  initListiningForInput() {
    const colorInput = document.getElementById("color-picker");
    colorInput.addEventListener("input", function (event) {
      this.intersectedObject.material.color.set(event.target.value);
    });

    const roughnessInput = document.querySelector("#roughness");
    roughnessInput.addEventListener("input", function (event) {
      this.intersectedObject.material.roughness = event.target.value;
    });

    const metalnessInput = document.querySelector("#metalness");
    metalnessInput.addEventListener("input", function (event) {
      this.intersectedObject.material.metalness = event.target.value;
    });
  }

  initListiningForColorContainer() {
    const colorsContainer = document.querySelector(".colors-container");

    colorsContainer.childNodes.forEach((colorContainer) => {
      colorContainer.addEventListener("click", (event) => {
        const selectedColor = event.target.getAttribute("value");
        this.intersectedObject.material.color.set(selectedColor);
      });
    });
  }

  initListiningForTextureContainer() {
    const texturesContainer = document.querySelector(".texture-container");

    texturesContainer.childNodes.forEach((textureContainer) => {
      textureContainer.addEventListener("click", (event) => {
        const clickedElement = event.target;
        const style = window.getComputedStyle(clickedElement);
        const backgroundImage = style.backgroundImage;
        const urlMatch = backgroundImage.match(
          /url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/
        );
        if (urlMatch[2]) {
          const clickedTexture = this.textureLoader.load(urlMatch[2]);
          this.intersectedObject.material.map = clickedTexture;
        }
      });
    });
  }
}
