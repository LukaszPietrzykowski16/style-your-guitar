import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function gltfLoader(scene, camera) {
  const loader = new GLTFLoader();
  loader.load(
    "public/guitar-extra-gltf.gltf",
    (gltf) => {
      const guitar = gltf.scene;
      const guitarBody = "GUITAR";

      guitar.traverse((node) => {
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
