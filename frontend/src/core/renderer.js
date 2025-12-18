import * as THREE from "three";

export const Renderer = () => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  if (window.innerWidth < 1000) {
    renderer.setSize(window.innerWidth, 700);
  } else {
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  document.body.appendChild(renderer.domElement);
  return renderer;
};
