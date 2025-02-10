import * as THREE from "three";
import "./styles/style.css";
import { cameraControls } from "./controls/camera-controls";
import { Camera } from "./core/camera";
import { Helpers } from "./utils/helpers";
import { Renderer } from "./core/renderer";
import { Light } from "./core/light";
import { Guitar } from "./models/guitar/guitar";
import { UiController } from "./ui/ui-controler";

const scene = new THREE.Scene();
const camera = Camera();
const renderer = Renderer();
const helpers = Helpers(camera, renderer);
const guitar = new Guitar(scene, camera);
const uiControler = new UiController(guitar);
let isLoading = false;

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

export function render() {
  renderer.setClearColor(0x2b2b2b, 1);
  renderer.render(scene, camera);
}

// scene.add(helpers.axesHelper);

// my first shader

const vertexShader = `
`;

const fragmentShader = `
`;

const uniforms = {
  time: { value: 0 },
  resolution: {
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

const geometry = new THREE.PlaneGeometry(30, 30);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  console.log(`Camera Position:
    x: ${camera.position.x}
    y: ${camera.position.y}
    z: ${camera.position.z}`);
  helpers.controls.update();
  uniforms.time.value = performance.now() * 0.001; // Przekazuje czas w sekundach
  render();
}
animate();
