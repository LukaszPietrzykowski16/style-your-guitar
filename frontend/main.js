import * as THREE from "three";
import "./style.css";
// import { cameraControls } from "./camera-controls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Camera } from "./camera";
import { Helpers } from "./helpers";
import { Renderer } from "./renderer";
import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";

const scene = new THREE.Scene();

const camera = Camera();
const renderer = Renderer();
const helpers = Helpers(camera, renderer);

const roughness = document.querySelector("#roughness");
const metalness = document.querySelector("#metalness");

let isMenuOpen = false;
let intersectedObject = {};

const textureLoader = new THREE.TextureLoader();
const stickerTexture = textureLoader.load("public/texture-default.png");

// cameraControls(camera);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, -5, 0);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(-10, -5, 0);
scene.add(directionalLight);
scene.add(directionalLight2);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const helper = new THREE.Object3D();
const loader = new GLTFLoader();

window.addEventListener(
  "resize",
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  },
  false
);

function animate() {
  requestAnimationFrame(animate);

  helpers.controls.update();

  render();
}

const canvas = document.querySelector("canvas");
canvas.addEventListener(
  "click",
  (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    const position = intersects[0].point;

    let n = intersects[0].face.normal.clone();

    n.add(intersects[0].point);

    helper.position.copy(intersects[0].point);
    helper.lookAt(n);

    intersectedObject = { ...intersectedObject, ...intersects[0].object };
    updateActiveElement();

    appereanceControl.style.opacity = "0.9";

    // to do: implement apply sticker and normal object
    // applySticker(position, intersects[0].face.normal, intersectedObject);
  },
  false
);

function render() {
  renderer.setClearColor(0x2b2b2b, 1);
  renderer.render(scene, camera);
}

function applySticker(position, normal, object) {
  const decalMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    depthWrite: false,
    depthTest: true,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    transparent: true,
    map: stickerTexture,
    specular: 0x444444,
    wireframe: false,
  });

  const decalGeometry = new DecalGeometry(
    intersectedObject,
    position,
    helper.rotation,
    new THREE.Vector3(0.5, 0.5, 0.5)
  );

  const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);
  scene.add(decalMesh);
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
        node.material.map = stickerTexture;
        // node.material.color.setHex(0xff0000);
        node.geometry.computeVertexNormals();
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

const guitarElements = document.querySelectorAll("#guitar-elements");

guitarElements.forEach((guitarElement) => {
  guitarElement.addEventListener("click", (element) => {
    const searchedelement = scene.getObjectByName(element.target.id);
    intersectedObject = { ...intersectedObject, ...searchedelement };
    updateActiveElement(intersectedObject.name);
  });
});

function updateActiveElement() {
  const activeElement = document.querySelector("#active-element");
  const colorInput = document.querySelector("#color-picker");
  const roughnessInput = document.querySelector("#roughness");
  const metalnessInput = document.querySelector("#metalness");

  colorInput.value = `#${intersectedObject.material.color.getHexString()}`;

  roughnessInput.value = intersectedObject.material.roughness;
  metalnessInput.value = intersectedObject.material.metalness;

  activeElement.innerHTML = `Active element: ${intersectedObject.name}`;
}

const colorInput = document.getElementById("color-picker");
colorInput.addEventListener("input", function (event) {
  intersectedObject.material.color.set(event.target.value);
});

const roughnessInput = document.querySelector("#roughness");
roughnessInput.addEventListener("input", function (event) {
  intersectedObject.material.roughness = event.target.value;
});

const metalnessInput = document.querySelector("#metalness");
metalnessInput.addEventListener("input", function (event) {
  intersectedObject.material.metalness = event.target.value;
});

const appereanceControl = document.querySelector("#appearence-control");

const colorsContainer = document.querySelector(".colors-container");

colorsContainer.childNodes.forEach((colorContainer) => {
  colorContainer.addEventListener("click", (event) => {
    const selectedColor = event.target.getAttribute("value");
    intersectedObject.material.color.set(selectedColor);
  });
});

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
      const clickedTexture = textureLoader.load(urlMatch[2]);
      intersectedObject.material.map = clickedTexture;
    }
  });
});

const closeIcon = document.querySelector(".close-icon");
const appereanceControlIcon = document.querySelector(
  ".appearence-control-icon"
);

closeIcon.addEventListener("click", () => {
  hideApperenaceControlMenu();
});

appereanceControlIcon.addEventListener("click", () => {
  showApperenaceControlMenu();
});

function hideApperenaceControlMenu() {
  appereanceControl.style.opacity = "0";
  appereanceControlIcon.style.opacity = "0.9";
}

function showApperenaceControlMenu() {
  appereanceControl.style.opacity = "0.9";
  appereanceControlIcon.style.opacity = "0";
}
