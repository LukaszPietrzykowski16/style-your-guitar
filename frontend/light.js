import * as THREE from "three";

export class Light {
  #directionalLight = new THREE.DirectionalLight(0xffffff, 1);

  constructor() {}

  initDirectionalLight(x, y, z) {
    this.#directionalLight.position.set(x, y, z);
    return this.#directionalLight;
  }
}
