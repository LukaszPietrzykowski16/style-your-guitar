import "../shared/components/card.component.js";

export class UiController {
  guitar = {};

  selectedPart = { name: "" };

  guitarElements = document.querySelectorAll("#guitar-elements");
  appereanceControl = document.querySelector("#appearence-control");
  appereanceControlIcon = document.querySelector(".appearence-control-icon");

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
    this.initListingForIcons();
    this.initMutationObserver();
    this.initListningForClickOnModel();
    this.initMouseMove();
    document.addEventListener("guitarPartSelected", (e) => {
      if (this.isSelectAPartOfGuitarVisible) {
        this.isSelectAPartOfGuitarVisible = false;
        this.showApperenaceControlMenuWhenIsEmpty();
      }
      if (!this.isApperanceControlMenuVisible) {
        if (!this.isApperanceControlMenuGenerated) {
          this.generateApperanceControlMenu();
        }
        this.showApperenaceControlMenu();
      }
    });
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
        const textureUrl = `${urlMatch[1] ?? ""}${urlMatch[2]}`;

        if (textureUrl && this.guitar) {
          this.guitar.updateIntersectedObjectTexture(textureUrl);
        }
      });
    });

    if (!fileLoader.dataset.listenerAdded) {
      fileLoader.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (!file) return;

        this.guitar.updateIntersectedObjectTextureFromFile(file);
        fileLoader.dataset.listenerAdded = "true";
      });
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

  initListingForIcons() {
    this.appereanceControlIcon.addEventListener("click", () => {
      if (!this.isApperanceControlMenuGenerated) {
        this.generateApperanceControlMenu();
      }
      this.showApperenaceControlMenu();
    });
  }

  hideApperenaceControlMenu() {
    this.isApperanceControlMenuVisible = false;
    this.hideApperenaceControlMenuAnimation();
    this.appereanceControlIcon.style.display = "flex";
  }

  showApperenaceControlMenuWhenIsEmpty() {
    if (this.guitar) {
      this.selectedPart.name = this.guitar.intersectedObject.name;
    }

    this.appereanceControl.innerHTML = `
  <div class="section-header">
    <div><span id="selected-guitar-part"> ${this.selectedPart.name}</span> Change Color </div> <div class="close-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
  </div>
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
      <div class="texture-card custom-sticker-upload">
      <label for="textureInput" class="custom-sticker-label">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        <span style="background-color: transparent;">Upload Texture</span>
      </label>
      <input type="file" id="textureInput" accept="image/*" style="display: none;"/>
    </div>
    <div class="texture-card" style="background-image: url('texture-default.png')">
      <span>Default</span>
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

  generateApperanceControlMenu() {
    this.showAppereanceControlMenuAnimation();

    if (this.guitar) {
      this.selectedPart.name = this.guitar.intersectedObject.name;
    }

    if (!this.selectedPart.name) {
      this.appereanceControl.innerHTML = `
       <div class="close-icon close-icon-empty"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
        <div> Select a part of guitar to customize it! </div>
       `;
      this.isSelectAPartOfGuitarVisible = true;
    } else {
      this.appereanceControl.innerHTML = `
  <div class="section-header">
    <div><span id="selected-guitar-part"> ${this.selectedPart.name}</span> Change Color </div>   <div class="close-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
  </div>

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
      <div class="texture-card custom-sticker-upload">
      <label for="textureInput" class="custom-sticker-label">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        <span style="background-color: transparent;">Upload Texture</span>
      </label>
      <input type="file" id="textureInput" accept="image/*" style="display: none;"/>
    </div>
    <div class="texture-card" style="background-image: url('texture-default.png')">
      <span>Default</span>
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

  showAppereanceControlMenuAnimation() {
    this.appereanceControl.animate(
      [{ opacity: 0 }, { opacity: 1, display: "flex" }],
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
