export class UiController {
  guitar = {};

  colorInput = document.querySelector("#color-picker");
  roughnessInput = document.querySelector("#roughness");
  metalnessInput = document.querySelector("#metalness");
  guitarElements = document.querySelectorAll("#guitar-elements");
  colorsContainer = document.querySelector(".colors-container");
  texturesContainer = document.querySelector(".texture-container");
  appereanceControl = document.querySelector("#appearence-control");
  closeIcon = document.querySelector(".close-icon");
  closeStickerIcon = document.querySelector(".close-icon-sticker");
  appereanceControlIcon = document.querySelector(".appearence-control-icon");
  stickerControlIcon = document.querySelector(".sticker-control-icon");
  stickerControl = document.querySelector("#sticker-control");
  stickerContainer = document.querySelector(".sticker-container");
  refresh = document.querySelector("#refresh");
  loaderContainer = document.querySelector(".loader-container");

  constructor(guitar) {
    this.guitar = guitar;
    this.init();
  }

  init() {
    this.mapGuitarElements();
    this.initListiningForInput();
    this.initListiningForColorContainer();
    this.initListiningForTextureContainer();
    this.initLoader();
    this.stickerInit();
    this.initListingForIcons();
  }

  updateActiveElement() {
    this.guitar.changeIntersectedObjectMaterialColor(colorInput.value);
    this.guitar.changeIntersectedObjectMaterialMetalness(metalnessInput.value);
    this.guitar.changeIntersectedObjectMaterialRoughness(roughnessInput.value);
  }

  mapGuitarElements() {
    this.guitarElements.forEach((guitarElement) => {
      guitarElement.addEventListener("click", (element) => {
        const searchedelement = this.scene.getObjectByName(element.target.id);
        this.guitar.updateIntersectedObject({
          ...this.intersectedObject,
          ...searchedelement,
        });
        updateActiveElement(this.intersectedObject.name);
      });
    });
  }

  initListiningForInput() {
    this.colorInput.addEventListener("input", (event) => {
      this.guitar.changeIntersectedObjectMaterialColor(event.target.value);
    });
    this.roughnessInput.addEventListener("input", (event) => {
      this.guitar.changeIntersectedObjectMaterialRoughness(event.target.value);
    });
    this.metalnessInput.addEventListener("input", (event) => {
      this.guitar.changeIntersectedObjectMaterialMetalness(event.target.value);
    });
  }

  initListiningForColorContainer() {
    this.colorsContainer.childNodes.forEach((colorContainer) => {
      colorContainer.addEventListener("click", (event) => {
        const selectedColor = event.target.getAttribute("data-color");
        this.guitar.changeIntersectedObjectMaterialColor(selectedColor);
      });
    });
  }

  initListiningForTextureContainer() {
    this.texturesContainer.childNodes.forEach((textureContainer) => {
      textureContainer.addEventListener("click", (event) => {
        const clickedElement = event.target;
        const style = window.getComputedStyle(clickedElement);
        const backgroundImage = style.backgroundImage;
        const urlMatch = backgroundImage.match(
          /url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/
        );
        if (urlMatch[2]) {
          this.guitar.updateIntersectedObjectTexture(urlMatch[2]);
        }
      });
    });
  }

  initLoader() {
    setTimeout(() => {
      this.loaderContainer.animate(
        [
          { clipPath: "circle(100% at center)", opacity: 1 },
          { clipPath: "circle(5% at center)", opacity: 0, display: "none" },
        ],
        {
          duration: 1000,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }, 700);
  }

  stickerInit() {
    this.stickerContainer.childNodes.forEach((stickerContainer) => {
      stickerContainer.addEventListener("click", (event) => {
        const clickedElement = event.target;
        const style = window.getComputedStyle(clickedElement);
        const backgroundImage = style.backgroundImage;
        const urlMatch = backgroundImage.match(
          /url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/
        );
        if (urlMatch[2]) {
          this.guitar.putStickerOnTheGuitar(urlMatch[2]);
        }
      });
    });
  }
  initListingForIcons() {
    this.closeIcon.addEventListener("click", () => {
      this.hideApperenaceControlMenu();
    });

    this.appereanceControlIcon.addEventListener("click", () => {
      this.showApperenaceControlMenu();
    });

    this.closeStickerIcon.addEventListener("click", () => {
      this.hideStickerControlMenu();
    });

    this.stickerControlIcon.addEventListener("click", () => {
      this.showStickerControlMenu();
    });

    this.refresh.addEventListener("click", () => {
      location.reload();
    });
  }

  hideApperenaceControlMenu() {
    this.appereanceControl.style.display = "none";
    this.appereanceControlIcon.style.display = "flex";
  }

  showApperenaceControlMenu() {
    this.appereanceControl.style.display = "flex";
    this.appereanceControlIcon.style.display = "none";
  }

  hideStickerControlMenu() {
    this.stickerControl.style.display = "none";
    this.stickerControlIcon.style.display = "flex";
  }

  showStickerControlMenu() {
    this.stickerControl.style.display = "flex";
    this.stickerControlIcon.style.display = "none";
  }
}
