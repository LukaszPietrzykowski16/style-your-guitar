import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function gltfLoader(scene, camera) {
  const loader = new GLTFLoader();
  loader.load(
    "./guitar-extra-gltf.gltf",
    (gltf) => {
      const guitar = gltf.scene;
      const guitarBody = "GUITAR";

      const textureLoader = new THREE.TextureLoader();
      const defaultTexture = textureLoader.load("texture-default.png");

      guitar.traverse((node) => {
        if (node.name === guitarBody) {
          node.material.map = defaultTexture;
          node.material.needsUpdate = true;
          node.material.color.set(0xff0000);
        }
        if (node.isMesh) {
          node.geometry.rotateX(1.5);
          node.geometry.rotateY(0);
          node.geometry.rotateZ(1.555);
        }
        if (node.isMesh && node.name === guitarBody) {
          node.geometry.computeVertexNormals();
        }
      });

      scene.add(guitar);

      const targetPart = guitar.getObjectByName(guitarBody);
      if (targetPart) {
        camera.lookAt(targetPart.getWorldPosition(new THREE.Vector3()));
      }
    },
    (xhr) => {
      // removeLoader();
      //   const precentageLoaded = xhr.loaded / xhr.total;
      //   const LOADED = 1;
      //   isLoading = true;
      //   if (precentageLoaded === LOADED) {
      //     isLoading = false;
      //     removeLoader();
      //   }
    },
    undefined,
    (error) => {
      console.error(error);
    }
  );
}
