import * as THREE from "three";
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
    this.initBackground();
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

  geometry = new THREE.SphereGeometry(30, 30, 30);

  material = new THREE.ShaderMaterial({
    fragmentShader: `
      #ifdef GL_ES
      precision mediump float;
      #endif
  
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uColor;
  
      const mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );
  
      float noise( in vec2 p )
      {
          return sin(p.x)*sin(p.y);
      }
  
      float fbm4( vec2 p )
      {
          float f = 0.0;
          f += 0.5000 * noise( p ); p = m * p * 2.02;
          f += 0.2500 * noise( p ); p = m * p * 2.02;
          f += 0.1250 * noise( p ); p = m * p * 2.02;
          f += 0.0625 * noise( p );
          return f / 0.9375;
      }
  
      float fbm6( vec2 p )
      {
          float f = 0.0;
          f += 0.500000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          f += 0.500000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          f += 0.500000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          f += 0.250000 * ( 0.4 + 0.3 * noise( p ) ); p = m * p * 2.02;
          return f / 0.96875;
      }
  
      vec2 fbm4_2( vec2 p )
      {
          return vec2(fbm4(p), fbm4(p + vec2(7.8)));
      }
  
      vec2 fbm6_2( vec2 p )
      {
          return vec2(fbm6(p + vec2(16.8)), fbm6(p + vec2(11.5)));
      }
  
      float func( vec2 q )
      {
          q += 0.03 * sin( vec2(0.2, 0.1) * iTime + length(q) * vec2(4.1, 4.3));
  
          vec2 o = fbm4_2( 0.6 * q );
          o += 0.04 * sin( vec2(0.12, 0.14) * iTime + length(o));
  
          vec2 n = fbm6_2( 3.0 * o );
  
          float f = 0.5 + 0.5 * fbm4( 1.8 * q + 6.0 * n );
          return mix( f, f * f * f * 3.5, f * abs(n.x) );
      }
  
      void main() 
      {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec2 p = (2.0 * uv - 1.0) * (iResolution.x / iResolution.y);
  
          float f = func(p);
  
          f = clamp(f, 0.0, 1.0);
  
          gl_FragColor = vec4(f * uColor, 1.0);

      }
      `,
    uniforms: {
      iTime: { value: 0 },
      uColor: { value: this.guitar.color },
      iResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      side: THREE.BackSide,
      depthWrite: false,
    },
  });

  initBackground() {
    this.geometry.scale(-1, 1, 1);
    const plane = new THREE.Mesh(this.geometry, this.material);
    plane.raycast = () => {};
    this.scene.add(plane);
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.material.uniforms.iTime.value += 0.05;
    // console.log(`Camera Position:
    // x: ${this.camera.position.x}
    // y: ${this.camera.position.y}
    // z: ${this.camera.position.z}`);
    this.helpers.controls.update();
    this.render();
  }
}
