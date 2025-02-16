import * as THREE from "three";
import "../styles/style.css";
import { Camera } from "../core/camera";
import { Helpers } from "../utils/helpers";
import { Renderer } from "../core/renderer";
import { Light } from "../core/light";
import { Guitar } from "../models/guitar/guitar";
import { UiController } from "../ui/ui-controler";
import { cameraControls } from "../controls/camera-controls";

export class App {
  scene = new THREE.Scene();
  camera = Camera();
  renderer = Renderer();
  helpers = Helpers(this.camera, this.renderer);
  guitar = new Guitar(this.scene, this.camera);
  uiControler = new UiController(this.guitar);
  isLoading = false;

  lightPositions = [
    [0, 0, 8],
    [0, 0, -8],
    [-9.947420066907123, -1.019879765564146, -0.09316263352782056],
    [9.981306658855566, -0.4765927811330809, 0.3825920841538427],
    [-0.1268484876457273, -5.6404379973057175, 0.7229959592571308],
  ];

  constructor() {
    this.initLight();
    this.initAppResize();
    this.initCameraControls();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  initLight() {
    this.lightPositions.forEach(([x, y, z]) => {
      const light = new Light().initDirectionalLight(x, y, z);
      this.scene.add(light);
    });
  }

  initCameraControls() {
    cameraControls(this.camera);
  }

  render() {
    this.renderer.setClearColor(0x2b2b2b, 1);
    this.renderer.render(this.scene, this.camera);
  }

  initAppResize() {
    // windowResizeHandler(this.renderer);
    window.addEventListener(
      "resize",
      () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.render();
      },
      false
    );
  }

  animate() {
    requestAnimationFrame(this.animate);
    console.log(`Camera Position:
	  x: ${this.camera.position.x}
	  y: ${this.camera.position.y}
	  z: ${this.camera.position.z}`);
    this.helpers.controls.update();
    // uniforms.time.value = performance.now() * 0.001; // Przekazuje czas w sekundach
    this.render();
  }
}
