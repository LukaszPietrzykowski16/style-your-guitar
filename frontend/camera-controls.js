import { gsap } from "gsap";

export const cameraControls = (camera) => {
  const front = document.querySelector("#front");
  const back = document.querySelector("#back");
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const body = document.querySelector("#body");
  const head = document.querySelector("#head");

  front.addEventListener("click", () => {
    updateCameraposition(
      -0.6314954594490563,
      0.6306999065581489,
      9.286856107569474,
      1
    );
  });

  back.addEventListener("click", () => {
    updateCameraposition(
      -0.5490899696241803,
      1.2921433022964555,
      -7.945298722141956,
      1
    );
  });

  left.addEventListener("click", () => {
    updateCameraposition(
      -6.910456907684895,
      -0.3007518968785895,
      -0.09388359602681749,
      1
    );
  });

  right.addEventListener("click", () => {
    updateCameraposition(
      9.899425237887076,
      -0.20431908945524174,
      1.3998691614463707,
      1
    );
  });

  body.addEventListener("click", () => {
    updateCameraposition(
      0.31616102219759334,
      -4.585210236552844,
      3.335984298295238,
      1
    );
  });

  head.addEventListener("click", () => {
    updateCameraposition(
      0.30968940109422394,
      6.669334261965599,
      2.0398495711876268,
      1
    );
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
