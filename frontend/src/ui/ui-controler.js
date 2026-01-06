import "../shared/components/card.component.js";

export class UiController {
  guitar = {};

  selectedPart = { name: "" };

  guitarElements = document.querySelectorAll("#guitar-elements");
  appereanceControl = document.querySelector("#appearence-control");

  loaderContainer = document.querySelector(".loader-container");
  canvas = document.querySelector("canvas");
  isApperanceControlMenuGenerated = false;

  isLoading = true;
  isApperanceControlMenuVisible = false;
  isSelectAPartOfGuitarVisible = false;

  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }

  selectedSticker;

  constructor(guitar) {
    this.guitar = guitar;
    this.init();
  }

  init() {
    this.initLoader();
    this.initListningForClickOnModel();
    this.initMouseMove();

    const settingsContainer = document.querySelector(".settings-container");

    settingsContainer.addEventListener("click", () => {
      if (!document.body.querySelector("#settings-card")) {
        const card = document.createElement("card-component");
        card.id = "settings-card";
        card.setAttribute("title", "Settings");
        card.appendContent("<p> Settings content goes here. </p>");
        card.setPosition("80px", "20px", "fixed");
        document.body.appendChild(card);
        this.settingsCardEl = card;
      }
      const card =
        this.settingsCardEl || document.querySelector("#settings-card");
      if (card) card.toggle();
    });
  }

  initMouseMove() {
    const onPointerMove = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      if (this.guitar) this.guitar.addTextOnHover(event);
    };

    if (window.PointerEvent) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    } else {
      window.addEventListener("mousemove", onPointerMove, { passive: true });
    }
  }

  updateActiveElement() {
    this.guitar.changeIntersectedObjectMaterialColor(colorInput.value);
    this.guitar.changeIntersectedObjectMaterialMetalness(metalnessInput.value);
    this.guitar.changeIntersectedObjectMaterialRoughness(roughnessInput.value);
  }

  resetInputs() {
    const defaults = {
      roughness: "",
      metalness: "",
      rotate: "0",
      zoom: "1.0",
      moveX: "0.5",
      moveY: "0.5",
    };

    for (const id in defaults) {
      const input = document.getElementById(id);
      if (input) input.value = defaults[id];
    }
  }

  initLoader() {
    document.addEventListener("GLTFobjectLoaded", () => {
      this.isLoading = true;
      this.loaderContainer.animate(
        [{ opacity: 1 }, { opacity: 0, display: "none" }],
        {
          duration: 600,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    });
  }

  hideApperenaceControlMenuAnimation() {
    this.appereanceControl.animate(
      [{ opacity: 1 }, { opacity: 0, display: "none" }],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  }

  initListningForClickOnModel() {
    this.canvas.addEventListener(
      "click",
      (event) => {
        if (!this.guitar) return;

        document
          .querySelectorAll(".selected")
          .forEach((el) => el.classList.remove("selected"));

        this.guitar.changeIntersectedObject(event);
      },
      false
    );
  }
}
