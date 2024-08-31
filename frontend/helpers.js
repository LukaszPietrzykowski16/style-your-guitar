import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const Helpers = (camera, renderer) => {
  const axesHelper = new THREE.AxesHelper(5);
  const controls = new OrbitControls(camera, renderer.domElement);
  return { axesHelper, controls };
};
