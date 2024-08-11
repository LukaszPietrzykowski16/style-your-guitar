import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(-10, 2, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

const controls = new OrbitControls(camera, renderer.domElement);

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

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  render();
}

function render() {
  renderer.setClearColor(0x2b2b2b, 1);
  renderer.render(scene, camera);
}
animate();
loader.load(
  "public/guitar.gltf",
  (gltf) => {
    const guitar = gltf.scene;

    guitar.position.set(0, -5, 0);

    guitar.traverse((node) => {
      if (node.isMesh) {
        node.material.color.setHex(0xff0000);
      }
    });

    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
