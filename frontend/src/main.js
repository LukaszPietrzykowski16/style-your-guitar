import * as THREE from "three";
import "./styles/style.css";
import { cameraControls } from "./controls/camera-controls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Camera } from "./core/camera";
import { Helpers } from "./utils/helpers";
import { Renderer } from "./core/renderer";
import { Light } from "./core/light";
import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";

const scene = new THREE.Scene();

const camera = Camera();
const renderer = Renderer();
const helpers = Helpers(camera, renderer);

let isStickerOn = false;
let isLoading = false;
let intersectedObject = {};
let selectedSticker = {};
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const helper = new THREE.Object3D();
const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();
const lightPositions = [
  [0, 0, 8],
  [0, 0, -8],
  [-9.947420066907123, -1.019879765564146, -0.09316263352782056],
  [9.981306658855566, -0.4765927811330809, 0.3825920841538427],
  [-0.1268484876457273, -5.6404379973057175, 0.7229959592571308],
];

lightPositions.forEach(([x, y, z]) => {
  const light = new Light().initDirectionalLight(x, y, z);
  scene.add(light);
});

cameraControls(camera);

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

    scene.add(guitar);
    // isModelLoaded(guitar);

    const targetPart = guitar.getObjectByName(guitarBody);
    if (targetPart) {
      camera.lookAt(targetPart.getWorldPosition(new THREE.Vector3()));
    }
  },
  (xhr) => {
    const precentageLoaded = xhr.loaded / xhr.total;
    const LOADED = 1;
    isLoading = true;
    if (precentageLoaded === LOADED) {
      isLoading = false;
      removeLoader();
    }
  },
  undefined,
  (error) => {
    console.error(error);
  }
);

function removeLoader() {
  const loaderContainer = document.querySelector(".loader-container");

  setTimeout(() => {
    loaderContainer.animate(
      [
        { clipPath: "circle(100% at center)", opacity: 1 },
        { clipPath: "circle(5% at center)", opacity: 0, display: "none" },
      ],
      {
        duration: 10,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  }, 0);
}

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

// my first shader

const vertexShader = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader
const fragmentShader = `
#ifdef GL_ES
precision mediump float;
#endif

  uniform float uTime;
  uniform vec2 uResolution;

  float plot(vec2 st){
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution; 

    vec3 uv3 = vec3(uv.x, uv.y,1.0);

    float pct = plot(uv);
    vec3 color = mix(vec3(1.0, 0.0, 0.0), vec3(0.0, 0.0, 1.0), uv.y);

    	  gl_FragColor = vec4(color + pct, 1.0);
  }
`;

const uniforms = {
  uTime: { value: 0 },
  uResolution: {
    value: new THREE.Vector2(window.innerWidth, window.innerHeight),
  },
};

const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms,
  side: THREE.DoubleSide,
  depthWrite: false,
});

// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00, // Set initial color
//   side: THREE.DoubleSide,
// });

const geometry = new THREE.PlaneGeometry(20, 20);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
