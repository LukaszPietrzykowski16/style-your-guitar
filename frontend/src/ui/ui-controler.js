export class UiController {
  guitar = {};

  guitarElements = document.querySelectorAll("#guitar-elements");
  appereanceControl = document.querySelector("#appearence-control");
  appereanceControlIcon = document.querySelector(".appearence-control-icon");
  stickerControl = document.querySelector("#sticker-control");
  refresh = document.querySelector("#refresh");
  loaderContainer = document.querySelector(".loader-container");
  canvas = document.querySelector("canvas");
  closeStickerIcon = document.querySelector(".close-icon-sticker");
  stickerControlIcon = document.querySelector(".sticker-control-icon");
  stickerContainer = document.querySelector(".sticker-container");

  isApperanceControlMenuGenerated = false;
  isStickerControlMenuGenerated = false;

  constructor(guitar) {
    this.guitar = guitar;
    this.init();
  }

  init() {
    this.initLoader();
    this.mapGuitarElements();
    this.initListingForIcons();
    this.initMutationObserver();
    this.initMutationObserverSticker();
    this.initListningForClickOnModel();
  }

  initMutationObserver() {
    this.observer = new MutationObserver(() => this.checkElements());
    this.observer.observe(this.appereanceControl, {
      childList: true,
      subtree: true,
    });
  }

  initMutationObserverSticker() {
    this.observer = new MutationObserver(() => this.checkElementsSticker());
    this.observer.observe(this.stickerControl, {
      childList: true,
      subtree: true,
    });
  }

  checkElementsSticker() {
    const stickerContainer = document.querySelector(".sticker-container");
    const closeStikcerIcon = document.querySelector(".close-icon-sticker");

    stickerContainer.childNodes.forEach((stickerContainer) => {
      stickerContainer.addEventListener("click", (event) => {
        const clickedElement = event.target;
        const style = window.getComputedStyle(clickedElement);
        const backgroundImage = style.backgroundImage;
        const urlMatch = backgroundImage.match(
          /url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/
        );
        const textureUrl = `${urlMatch[1]}${urlMatch[2]}`;
        if (textureUrl) {
          this.guitar.putStickerOnTheGuitar(textureUrl);
        }
      });
    });

    closeStikcerIcon.addEventListener("click", () => {
      this.hideStickerControlMenu();
    });
  }

  checkElements() {
    const closeIcon = document.querySelector(".close-icon");
    const colorInput = document.querySelector("#color-picker");
    const roughnessInput = document.querySelector("#roughness");
    const metalnessInput = document.querySelector("#metalness");
    const colorsContainer = document.querySelector(".colors-container");
    const texturesContainer = document.querySelector(".texture-container");
    const rotateInput = document.querySelector("#rotate");
    const zoomInZoomOutInput = document.querySelector("#zoom");
    const moveXInput = document.querySelector("#moveX");
    const moveYInput = document.querySelector("#moveY");
    const fileLoader = document.querySelector("#textureInput");

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
    rotateInput.addEventListener("input", (event) => {
      this.guitar.rotateTexture(event.target.value);
    });
    zoomInZoomOutInput.addEventListener("input", (event) => {
      this.guitar.zoomInOutTexture(event.target.value);
    });
    moveXInput.addEventListener("input", (event) => {
      this.guitar.moveX(event.target.value);
    });
    moveYInput.addEventListener("input", (event) => {
      this.guitar.moveY(event.target.value);
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
        const textureUrl = `${urlMatch[1]}${urlMatch[2]}`;

        if (textureUrl) {
          this.guitar.updateIntersectedObjectTexture(textureUrl);
        }
      });
    });

    fileLoader.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (!file) return;

      this.guitar.updateIntersectedObjectTextureFromFile(file);
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

  initListingForIcons() {
    this.appereanceControlIcon.addEventListener("click", () => {
      if (!this.isApperanceControlMenuGenerated) {
        this.generateApperanceControlMenu();
      }

      this.showApperenaceControlMenu();
    });

    this.stickerControlIcon.addEventListener("click", () => {
      if (!this.isStickerControlMenuGenerated) {
        this.generateStickerControlMenu();
      }
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
      { name: "Default", url: "texture-default.png" },
      { name: "Custom", url: "" },
      { name: "Pastel", url: "texture0.PNG" },
      { name: "Rusty", url: "texture1.jpg" },
      { name: "Chaotic", url: "texture2.PNG" },
    ];

    for (let i = 4; i <= 21; i++) {
      textures.push({ name: "Scratches", url: `texture${i}.PNG` });
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
            <span>${
              t.name === "Custom"
                ? `Custom <input type="file" id="textureInput" accept="image/*">`
                : t.name
            }</span>
          </div>
        `
          )
          .join("")}
      </div>
      <div style="display: flex; gap: 10px">
      <div>
      <p>Roughness</p>
      <input type="range" min="0" max="2" step="0.01" value="" id="roughness" />
      </div>
      <div>
      <p>Metalness</p>
      <input type="range" min="0" max="2" step="0.01" value="" id="metalness" />
      </div>
      </div>

      <div style="display: flex; gap: 10px">
          <div>
   <p> Rotate </p>
      <input type="range" min="0" max="360" step="1" value="0" id="rotate" />

      
          </div>
         <div>
 <p> Zoom in / Zoom out</p>
      <input type="range" min="0.5" max="2.5" step="0.01" value="1.0" id="zoom" />
         </div>

      
      </div>
            <div style="display: flex; gap: 10px">
      <div>
        <p> MoveX </p>
        <input type="range" min="0" max="1" step="0.001" value="0.5" id="moveX" />
      </div>
      <div>
  <p> MoveY </p>
            <input type="range" min="0" max="1" step="0.001" value="0.5" id="moveY" />
      </div>
       
      </div>
      </div>


 
   
    `;
  }

  generateStickerControlMenu() {
    this.isStickerControlMenuGenerated = true;
    this.stickerControl.innerHTML = `
       <h1
        style="
          font-size: 18px;
          text-align: left;
          width: 100%;
          padding-top: 8px;
          padding-left: 16px;
        "
      >
        Add sticker
      </h1>
      <div class="close-icon-sticker">X</div>
      <div class="sticker-container">
        <div class="texture-card">
          <span> Custom </span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('stop.jpg')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker0.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker1.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker2.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker3.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker4.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker5.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker6.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker7.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker8.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker9.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker10.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker11.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker12.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker13.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker14.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker15.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker16.PNG')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker17.PNG')"
        ></div>
              <div
          class="texture-card"
          style="background-image: url('test.png')"
        ></div>
      </div>
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
