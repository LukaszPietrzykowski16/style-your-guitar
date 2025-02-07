import * as THREE from "three";
import "./styles/style.css";
import { cameraControls } from "./controls/camera-controls";
import { Camera } from "./core/camera";
import { Helpers } from "./utils/helpers";
import { Renderer } from "./core/renderer";
import { Light } from "./core/light";
import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";
import { windowResizeHandler } from "./controls/window-controls";
import { gltfLoader } from "./models/gltf-loader/gltf-loader";
import { Guitar } from "./models/guitar/guitar";

const scene = new THREE.Scene();
const camera = Camera();
const renderer = Renderer();
const helpers = Helpers(camera, renderer);
const guitar = new Guitar(scene, camera);

let isStickerOn = false;
let isLoading = false;
let selectedSticker = {};
const helper = new THREE.Object3D();

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
// windowResizeHandler(renderer);
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

export function render() {
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

export function removeLoader() {
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

const appereanceControl = document.querySelector("#appearence-control");

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

export function showApperenaceControlMenu() {
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
