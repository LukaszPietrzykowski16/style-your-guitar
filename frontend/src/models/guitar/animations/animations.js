import * as THREE from "three";

export function addHaloGlow(object, glowColor, sizeMultiplier, glowIntensity) {
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

export function fadeOutGlow(glowMesh, duration, scene) {
  const startTime = performance.now();

  const animateGlow = () => {
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
  };

  animateGlow();
}

export function addTemporaryGlow(intersectedObject, scene) {
  const glowMesh = addHaloGlow(intersectedObject, 0xffffff, 1, 8);

  scene.add(glowMesh);

  fadeOutGlow(glowMesh, 800, scene);
}
