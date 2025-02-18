export class UiController {
  guitar = {};

  guitarElements = document.querySelectorAll("#guitar-elements");
  appereanceControl = document.querySelector("#appearence-control");
  closeStickerIcon = document.querySelector(".close-icon-sticker");
  appereanceControlIcon = document.querySelector(".appearence-control-icon");
  stickerControlIcon = document.querySelector(".sticker-control-icon");
  stickerControl = document.querySelector("#sticker-control");
  stickerContainer = document.querySelector(".sticker-container");
  refresh = document.querySelector("#refresh");
  loaderContainer = document.querySelector(".loader-container");
  canvas = document.querySelector("canvas");

  isApperanceControlMenuGenerated = false;

  constructor(guitar) {
    this.guitar = guitar;
    this.init();
  }

  init() {
    this.initLoader();
    this.mapGuitarElements();
    this.initListingForIcons();
    this.initMutationObserver();
    this.stickerInit();
    this.initListningForClickOnModel();
  }

  initMutationObserver() {
    this.observer = new MutationObserver(() => this.checkElements());
    this.observer.observe(this.appereanceControl, {
      childList: true,
      subtree: true,
    });
  }

  checkElements() {
    const closeIcon = document.querySelector(".close-icon");
    const colorInput = document.querySelector("#color-picker");
    const roughnessInput = document.querySelector("#roughness");
    const metalnessInput = document.querySelector("#metalness");
    const colorsContainer = document.querySelector(".colors-container");
    const texturesContainer = document.querySelector(".texture-container");

    closeIcon.addEventListener("click", () => {
      this.hideApperenaceControlMenu();
    });
    colorInput.addEventListener("input", (event) => {
      this.guitar.changeIntersectedObjectMaterialColor(event.target.value);
    });
    roughnessInput.addEventListener("input", (event) => {
      this.guitar.changeIntersectedObjectMaterialRoughness(event.target.value);
    });
    metalnessInput.addEventListener("input", (event) => {
      this.guitar.changeIntersectedObjectMaterialMetalness(event.target.value);
    });

    colorsContainer.childNodes.forEach((colorContainer) => {
      colorContainer.addEventListener("click", (event) => {
        const selectedColor = event.target.getAttribute("data-color");
        this.guitar.changeIntersectedObjectMaterialColor(selectedColor);
      });
    });

    texturesContainer.childNodes.forEach((textureContainer) => {
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
    this.appereanceControlIcon.addEventListener("click", () => {
      if (!this.isApperanceControlMenuGenerated) {
        this.generateApperanceControlMenu();
      }

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

  generateApperanceControlMenu() {
    this.isApperanceControlMenuGenerated = true;

    const colors = [
      { name: "red", hex: "#ff0000" },
      { name: "blue", hex: "#0000ff" },
      { name: "green", hex: "#008000" },
      { name: "yellow", hex: "#ffff00" },
      { name: "purple", hex: "#800080" },
      { name: "white", hex: "#ffffff" },
      { name: "black", hex: "#000000" },
    ];

    const textures = [
      { name: "Default", url: "/public/texture-default.PNG" },
      { name: "Custom", url: "" },
      { name: "Pastel", url: "/public/texture0.PNG" },
      { name: "Rusty", url: "/public/texture1.jpg" },
      { name: "Chaotic", url: "/public/texture2.PNG" },
    ];

    for (let i = 4; i <= 21; i++) {
      textures.push({ name: "Scratches", url: `/public/texture${i}.PNG` });
    }

    this.appereanceControl.innerHTML = `
      <div id="active-element" style="display: none"></div>
      <h1 style="font-size: 18px; text-align: left; width: 100%; padding-left: 16px;">
        Change Color
      </h1>
      <div class="close-icon"><i data-feather="x"></i>X</div>
      <div class="colors-container">
        ${colors
          .map(
            (c) =>
              `<span class="color-dot-${c.name}" data-color="${c.hex}"></span>`
          )
          .join("")}
        <input type="color" id="color-picker" name="color-picker" value="" />
      </div>
      <h1 style="font-size: 18px; text-align: left; width: 100%; padding-left: 16px;">
        Change Texture
      </h1>
      <div class="texture-container">
        ${textures
          .map(
            (t) => `
          <div class="texture-card" style="${
            t.url ? `background-image: url('${t.url}')` : ""
          }">
            <span>${t.name}</span>
          </div>
        `
          )
          .join("")}
      </div>
      <p>Roughness</p>
      <input type="range" min="0" max="2" step="0.01" value="" id="roughness" />
      <p>Metalness</p>
      <input type="range" min="0" max="2" step="0.01" value="" id="metalness" />
    `;
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

  initListningForClickOnModel() {
    this.canvas.addEventListener(
      "click",
      (event) => {
        this.guitar.changeIntersectedObject(event);

        if (!this.isApperanceControlMenuGenerated) {
          this.generateApperanceControlMenu();
        }

        this.showApperenaceControlMenu();
      },
      false
    );
  }
}
