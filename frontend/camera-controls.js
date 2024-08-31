import { gsap } from "gsap";

export const cameraControls = (camera) => {
  const guitarBody = document.querySelector("#guitar-body");
  const preview = document.querySelector("#preview");
  const pickGuard = document.querySelector("#pick-guard");
  const pickups = document.querySelector("#pickups");
  const neck = document.querySelector("#neck");
  const head = document.querySelector("#head");

  guitarBody.addEventListener("click", () => {
    updateCameraposition(-5, -11, 0, 2);
  });

  preview.addEventListener("click", () => {
    updateCameraposition(-10, 2, 0, 1);
  });

  pickGuard.addEventListener("click", () => {
    updateCameraposition(-5, -8, 7, 3);
  });

  pickups.addEventListener("click", () => {
    updateCameraposition(-1, -6.5, 0, 3);
  });

  neck.addEventListener("click", () => {
    updateCameraposition(-10, 10, 0, 3);
  });

  head.addEventListener("click", () => {
    updateCameraposition(-2, 10, 0, 3);
  });

  function updateCameraposition(x, y, z, zoom) {
    gsap.to(camera.position, {
      x,
      y,
      z,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.updateProjectionMatrix();
      },
    });

    gsap.to(camera, {
      zoom,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.updateProjectionMatrix();
      },
    });
  }
};
