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
    this.appereanceControl.innerHTML = `
       <div id="active-element" style="display: none"></div>
      <h1
        style="
          font-size: 18px;
          text-align: left;
          width: 100%;
          padding-left: 16px;
        "
      >
        Change Color
      </h1>
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
      <h1
        style="
          font-size: 18px;
          text-align: left;
          width: 100%;
          padding-left: 16px;
        "
      >
        Change Texture
      </h1>

      <div class="texture-container">
        <div
          class="texture-card"
          style="background-image: url('/public/texture-default.PNG')"
        >
          <span> Default </span>
        </div>
        <div class="texture-card">
          <span> Custom </span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture0.PNG')"
        >
          <span> Pastel </span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture1.jpg')"
        >
          <span>Rusty</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture2.PNG')"
        >
          <span>Chaotic</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture4.jpg')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture5.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture6.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture7.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture8.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture9.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture10.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture11.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture12.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture13.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture14.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture15.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture16.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture17.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture18.PNG')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture19.jpg')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture20.jpg')"
        >
          <span> Scratches</span>
        </div>
        <div
          class="texture-card"
          style="background-image: url('/public/texture21.PNG')"
        >
          <span> Scratches</span>
        </div>
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
}
