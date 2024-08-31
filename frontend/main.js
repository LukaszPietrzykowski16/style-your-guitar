import * as THREE from "three";
import "./style.css";
import { cameraControls } from "./camera-controls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Camera } from "./camera";
import { Helpers } from "./helpers";
const scene = new THREE.Scene();

const camera = Camera();
const renderer = new THREE.WebGLRenderer();
const helpers = Helpers(camera, renderer);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const loader = new GLTFLoader();

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, -5, 0);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(-10, -5, 0);
scene.add(directionalLight);
scene.add(directionalLight2);

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

cameraControls(camera);

function animate() {
  requestAnimationFrame(animate);

  helpers.controls.update();

  render();
}

window.addEventListener(
  "click",
  (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      const colorInput = document.querySelector("#color-picker");
      console.log(intersectedObject);
      intersectedObject.material.color.set(colorInput.value);
    }
  },
  false
);

function render() {
  renderer.setClearColor(0x2b2b2b, 1);
  renderer.render(scene, camera);
}

animate();

loader.load(
  "public/guitar.gltf",
  (gltf) => {
    const guitar = gltf.scene;
    const guitarBody = "GUITAR";

    guitar.position.set(0, -5, 0);

    guitar.traverse((node) => {
      if (node.isMesh && node.name === guitarBody) {
        node.material.map = null;
        node.material.color.setHex(0xff0000);
      }
    });

    scene.add(gltf.scene);

    const targetPart = gltf.scene.getObjectByName(guitarBody);
    if (targetPart) {
      camera.lookAt(targetPart.getWorldPosition(new THREE.Vector3()));
    }
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

scene.add(helpers.axesHelper);
