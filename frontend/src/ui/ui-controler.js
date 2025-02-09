export class UiController {
  guitar;

  colorInput = document.querySelector("#color-picker");
  roughnessInput = document.querySelector("#roughness");
  metalnessInput = document.querySelector("#metalness");
  guitarElements = document.querySelectorAll("#guitar-elements");
  colorsContainer = document.querySelector(".colors-container");
  texturesContainer = document.querySelector(".texture-container");

  constructor(guitar) {
    this.guitar = guitar;
    this.init();
  }

  init() {
    this.mapGuitarElements();
    this.initListiningForInput();
    this.initListiningForColorContainer();
    this.initListiningForTextureContainer();
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
}
