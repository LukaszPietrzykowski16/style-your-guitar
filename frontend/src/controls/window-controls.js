import { Camera } from "../core/camera";
import { render } from "../main";

export const windowResizeHandler = (renderer) => {
  const camera = Camera();
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
};
