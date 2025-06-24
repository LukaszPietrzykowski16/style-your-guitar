export class UiController {
  guitar = {};

  selectedPart = { name: "" };

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
  isLoading = true;
  isApperanceControlMenuVisible = false;

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
    this.initListingForIcons();
    this.initMutationObserver();
    this.initMutationObserverSticker();
    this.initListningForClickOnModel();
    this.initMouseMove();
    document.addEventListener("guitarPartSelected", (e) => {
      if (!this.isApperanceControlMenuVisible) {
        if (!this.isApperanceControlMenuGenerated) {
          this.generateApperanceControlMenu();
        }
        this.showApperenaceControlMenu();
      }
    });
  }

  initMouseMove() {
    window.addEventListener(
      "mousemove",
      (event) => {
        if (this.guitar) this.guitar.addTextOnHover(event);
      },
      false
    );
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
    const removeSticker = document.querySelectorAll(".remove-sticker");

    Array.from(stickerContainer.children).forEach((stickerEl) => {
      if (!stickerEl.dataset.listenerAdded) {
        stickerEl.addEventListener("click", (event) => {
          document
            .querySelectorAll(".selected")
            .forEach((el) => el.classList.remove("selected"));
          const clickedElement = event.target;
          this.selectedSticker = clickedElement;

          this.selectedSticker.classList.add("selected");

          const style = window.getComputedStyle(clickedElement);
          const backgroundImage = style.backgroundImage;
          const urlMatch = backgroundImage.match(
            /url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/
          );

          const textureUrl = `${urlMatch[1]}${urlMatch[2]}`;

          if (textureUrl && this.guitar) {
            this.guitar.putStickerOnTheGuitar(textureUrl);
          }

          stickerEl.dataset.listenerAdded = "true";
        });
      }
    });

    removeSticker.forEach((sticker) => {
      sticker.addEventListener("click", (event) => {
        const decalUUID = event.target.dataset.value;
        this.guitar.removeDecalByUUID(decalUUID);
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
      if (this.guitar) {
        this.guitar.changeIntersectedObjectMaterialColor(event.target.value);
      }
    });
    roughnessInput.addEventListener("input", (event) => {
      if (this.guitar) {
        this.guitar.changeIntersectedObjectMaterialRoughness(
          event.target.value
        );
      }
    });
    metalnessInput.addEventListener("input", (event) => {
      if (this.guitar) {
        this.guitar.changeIntersectedObjectMaterialMetalness(
          event.target.value
        );
      }
    });
    rotateInput.addEventListener("input", (event) => {
      if (this.guitar) {
        this.guitar.rotateTexture(event.target.value);
      }
    });
    zoomInZoomOutInput.addEventListener("input", (event) => {
      if (this.guitar) {
        this.guitar.zoomInOutTexture(event.target.value);
      }
    });
    moveXInput.addEventListener("input", (event) => {
      if (this.guitar) {
        this.guitar.moveX(event.target.value);
      }
    });
    moveYInput.addEventListener("input", (event) => {
      if (this.guitar) {
        this.guitar.moveY(event.target.value);
      }
    });

    colorsContainer.childNodes.forEach((colorContainer) => {
      colorContainer.addEventListener("click", (event) => {
        if (this.guitar) {
          const selectedColor = event.target.getAttribute("data-color");
          this.guitar.changeIntersectedObjectMaterialColor(selectedColor);
        }
      });
    });

    texturesContainer.childNodes.forEach((textureContainer) => {
      textureContainer.addEventListener("click", (event) => {
        this.resetInputs();
        const clickedElement = event.target;
        const style = window.getComputedStyle(clickedElement);
        const backgroundImage = style.backgroundImage;
        const urlMatch = backgroundImage.match(
          /url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/
        );
        const textureUrl = `${urlMatch[1]}${urlMatch[2]}`;

        if (textureUrl && this.guitar) {
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
    const loaderAnimation = this.loaderContainer.animate(
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
    if (!this.isLoading) {
      loaderAnimation.finish();
    }
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
    this.isApperanceControlMenuVisible = false;
    this.hideApperenaceControlMenuAnimation();
    this.appereanceControlIcon.style.display = "flex";
  }

  generateApperanceControlMenu() {
    this.showAppereanceControlMenuAnimation();

    if (this.guitar) {
      this.selectedPart.name = this.guitar.intersectedObject.name;
    }

    if (!this.selectedPart.name) {
      this.appereanceControl.innerHTML = `
       <div class="close-icon"><i data-feather="x"></i>X</div>
        <div> Select a part of guitar to customize it! </div>
       `;
    } else {
      this.appereanceControl.innerHTML = `
  <div class="section-header">
    <span id="selected-guitar-part"> ${this.selectedPart.name}</span> Change Color 
  </div>
  <div class="close-icon"><i data-feather="x"></i>X</div>
  <div class="colors-container">
    <span class="color-dot-red" data-color="#ff0000"></span>
    <span class="color-dot-blue" data-color="#0000ff"></span>
    <span class="color-dot-green" data-color="#008000"></span>
    <span class="color-dot-yellow" data-color="#ffff00"></span>
    <span class="color-dot-purple" data-color="#800080"></span>
    <span class="color-dot-white" data-color="#ffffff"></span>
    <span class="color-dot-black" data-color="#000000"></span>
    <input type="color" id="color-picker" name="color-picker" value="" />
  </div>

  <span style="font-size: 18px; text-align: left; width: 100%; padding-left: 16px;">
    Change Texture
  </span>
  <div class="texture-container">
    <div class="texture-card" style="background-image: url('texture-default.png')">
      <span>Default</span>
    </div>
    <div class="texture-card">
      <span>Custom <input type="file" id="textureInput" accept="image/*"></span>
    </div>
        <div class="texture-card" style="background-image: url('texture14.PNG')">
      <span>Pine</span>
    </div>
    <div class="texture-card" style="background-image: url('texture15.PNG')">
      <span>Nut tree</span>
    </div>
    <div class="texture-card" style="background-image: url('texture16.PNG')">
      <span>Oak</span>
    </div>
    <div class="texture-card" style="background-image: url('texture17.PNG')">
      <span>Ash</span>
    </div>
    <div class="texture-card" style="background-image: url('panther.PNG')">
      <span>Panther</span>
    </div>
    <div class="texture-card" style="background-image: url('zebra.PNG')">
      <span>Zebra</span>
    </div>
        <div class="texture-card" style="background-image: url('texture13.PNG')">
      <span>Zebra 2</span>
    </div>
    <div class="texture-card" style="background-image: url('camo-white.PNG')">
  <span>Camo White</span>
</div>
<div class="texture-card" style="background-image: url('camo.PNG')">
  <span>Camo</span>
</div>
<div class="texture-card" style="background-image: url('vhs.PNG')">
  <span>VHS</span>
</div>
    <div class="texture-card" style="background-image: url('texture1.jpg')">
      <span>Rusty</span>
    </div>
<div class="texture-card" style="background-image: url('crack.PNG')">
  <span>Crack</span>
</div>
<div class="texture-card" style="background-image: url('mineral-oil.jpg')">
  <span>Mineral Oil</span>
</div>
<div class="texture-card" style="background-image: url('pattern.PNG')">
  <span>Pattern</span>
</div>

    <div class="texture-card" style="background-image: url('texture0.PNG')">
      <span>Pastel</span>
    </div>

    <div class="texture-card" style="background-image: url('texture2.PNG')">
      <span>Chaotic</span>
    </div>
    <div class="texture-card" style="background-image: url('texture5.PNG')">
      <span>Lines</span>
    </div>
    <div class="texture-card" style="background-image: url('texture6.PNG')">
      <span>Lines 2</span>
    </div>
        <div class="texture-card" style="background-image: url('texture10.PNG')">
      <span>Lines 3</span>
    </div>
    <div class="texture-card" style="background-image: url('texture7.PNG')">
      <span>Brocade</span>
    </div>
    <div class="texture-card" style="background-image: url('texture8.PNG')">
      <span>Brocade 2</span>
    </div>
    <div class="texture-card" style="background-image: url('texture9.PNG')">
      <span>Brocade 3</span>
    </div>

    <div class="texture-card" style="background-image: url('texture11.PNG')">
      <span>Dots</span>
    </div>
    <div class="texture-card" style="background-image: url('texture12.PNG')">
      <span>Dots</span>
    </div>
    <div class="texture-card" style="background-image: url('texture21.PNG')">
      <span>Flames</span>
    </div>
    <div class="texture-card" style="background-image: url('texture20.PNG')">
      <span>Flames 2</span>
    </div>
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
      <input type="range" min="0.0" max="2.0" step="0.01" value="1.0" id="zoom" />
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
`;
    }
  }

  generateStickerControlMenu() {
    this.isStickerControlMenuGenerated = true;

    this.showStickerControlMenuAnimation();

    this.stickerControl.innerHTML = `
       <span
        class="section-header"
      >
        Add sticker
      </span>
      
      <div class="close-icon-sticker"><i data-feather="x"></i>X</div>
      <div class="sticker-container">
        <div class="texture-card">
          <span> Custom </span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('sticker0.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker1.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker2.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker3.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker4.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker5.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker6.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker7.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker8.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker10.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker11.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker12.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker13.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker14.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker15.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker16.png')"
        ></div>
        <div
          class="texture-card"
          style="background-image: url('sticker17.png')"
        ></div>
      </div>
      <div class="sticker-config-container">
      <span      style="
          font-size: 18px;
          text-align: left;
          width: 100%;
          text-align: left;
          padding-top: 12px;
          padding-left: 16px;
          display: flex;
        "> Change Sticker </span>
      <div id="sticker-config" class="sticker-container">
        Please selected sticker
      </div>
      </div>
    `;
  }

  showStickerControlMenuAnimation() {
    this.stickerControl.animate(
      [
        { clipPath: "circle(0% at left)", opacity: 0 },
        { clipPath: "circle(110% at left)", opacity: 1, display: "flex" },
      ],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  }

  hideApperenaceControlMenuAnimation() {
    this.appereanceControl.animate(
      [
        { clipPath: "circle(110% at right)", opacity: 1 },
        { clipPath: "circle(0% at right)", opacity: 0, display: "none" },
      ],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  }

  showAppereanceControlMenuAnimation() {
    this.appereanceControl.animate(
      [
        { clipPath: "circle(0% at right)", opacity: 0 },
        { clipPath: "circle(110% at right)", opacity: 1, display: "flex" },
      ],
      {
        duration: 800,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  }

  showApperenaceControlMenu() {
    this.isApperanceControlMenuVisible = true;
    this.showAppereanceControlMenuAnimation();
    this.appereanceControl.style.display = "flex";
    this.appereanceControlIcon.style.display = "none";
  }

  hideStickerControlMenu() {
    this.stickerControl.animate(
      [
        { clipPath: "circle(110% at left)", opacity: 1 },
        { clipPath: "circle(0% at left)", opacity: 0, display: "none" },
      ],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
    this.stickerControlIcon.style.display = "flex";
  }

  showStickerControlMenu() {
    this.showStickerControlMenuAnimation();
    this.stickerControl.style.display = "flex";
    this.stickerControlIcon.style.display = "none";
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
