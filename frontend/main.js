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
let isStickerOn = false;
let intersectedObject = {};
let selectedSticker = {};

// cameraControls(camera);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, 8);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(0, 0, -8);
const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight3.position.set(
  -9.947420066907123,
  -1.019879765564146,
  -0.09316263352782056
);
const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight4.position.set(
  9.981306658855566,
  -0.4765927811330809,
  0.3825920841538427
);
const directionalLight5 = new THREE.DirectionalLight(0xffffff, 1);

directionalLight5.position.set(
  -0.1268484876457273,
  -5.6404379973057175,
  0.7229959592571308
);
scene.add(directionalLight);
scene.add(directionalLight2);
scene.add(directionalLight3);
scene.add(directionalLight4);
scene.add(directionalLight5);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const helper = new THREE.Object3D();
const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

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
  console.log(`Camera Position:
    x: ${camera.position.x}
    y: ${camera.position.y}
    z: ${camera.position.z}`);
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

    intersectedObject = { ...intersectedObject, ...intersects[0].object };

    if (isStickerOn) {
      isStickerOn = false;
      applySticker(position, intersects[0].face.normal, intersectedObject);
      return;
    }

    addTemporaryGlow();

    appereanceControlIcon.style.display = "none";
    showApperenaceControlMenu();
    updateActiveElement();

    // helper.position.copy(intersects[0].point);
    // helper.lookAt(n);

    // let n = intersects[0].face.normal.clone();

    // n.add(intersects[0].point);
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
    map: selectedSticker,
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

// scene.add(helpers.axesHelper);

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

function addHaloGlow(object, glowColor, sizeMultiplier, glowIntensity) {
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

function addTemporaryGlow() {
  console.log(intersectedObject);

  const glowMesh = addHaloGlow(intersectedObject, 0xffffff, 1, 8);

  scene.add(glowMesh);

  fadeOutGlow(glowMesh, 800);
}

function fadeOutGlow(glowMesh, duration) {
  const startTime = performance.now();

  function animateGlow() {
    const elapsed = performance.now() - startTime;
    const progress = elapsed / duration;

    if (progress < 1) {
      glowMesh.material.opacity = 0.5 * (1 - progress);
      requestAnimationFrame(animateGlow);
    } else {
      scene.remove(glowMesh);
      glowMesh.geometry.dispose();
      glowMesh.material.dispose();
    }
  }

  animateGlow();
}

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
const closeStickerIcon = document.querySelector(".close-icon-sticker");
const appereanceControlIcon = document.querySelector(
  ".appearence-control-icon"
);

const stickerControlIcon = document.querySelector(".sticker-control-icon");
const stickerControl = document.querySelector("#sticker-control");
const stickerContainer = document.querySelector(".sticker-container");

stickerContainer.childNodes.forEach((stickerContainer) => {
  stickerContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const style = window.getComputedStyle(clickedElement);
    const backgroundImage = style.backgroundImage;
    const urlMatch = backgroundImage.match(
      /url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/
    );
    if (urlMatch[2]) {
      const clickedSticker = textureLoader.load(urlMatch[2]);
      selectedSticker = clickedSticker;
      isStickerOn = true;
    }
  });
});

closeIcon.addEventListener("click", () => {
  hideApperenaceControlMenu();
});

appereanceControlIcon.addEventListener("click", () => {
  showApperenaceControlMenu();
});

closeStickerIcon.addEventListener("click", () => {
  hideStickerControlMenu();
});

stickerControlIcon.addEventListener("click", () => {
  showStickerControlMenu();
});

function hideApperenaceControlMenu() {
  appereanceControl.style.display = "none";
  appereanceControlIcon.style.display = "flex";
}

function showApperenaceControlMenu() {
  appereanceControl.style.display = "flex";
  appereanceControlIcon.style.display = "none";
}

function hideStickerControlMenu() {
  stickerControl.style.display = "none";
  stickerControlIcon.style.display = "flex";
}

function showStickerControlMenu() {
  stickerControl.style.display = "flex";
  stickerControlIcon.style.display = "none";
}

const refresh = document.querySelector("#refresh");
refresh.addEventListener("click", () => {
  location.reload();
});
