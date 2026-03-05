import * as THREE from "three";
import "../../shared/components/card.component";
import * as texturesTemplate from "./textures.html?raw";
import { uploadImageToIndexedDb } from "../../utils/upload-image-to-indexed-db";

export class Textures {
  textureControlIcon = document.querySelector(".appearence-control-icon");
  textureContainer = document.querySelector(".texture-container");

  textureLoader = new THREE.TextureLoader();

  guitar = {};
  isTextureOn = false;
  isTextureTemplate = false;
  lastRotate = 0;

  constructor(guitar) {
    this.guitar = guitar;
    this.initListingForIcons();
  }

  initListingForIcons() {
    this.textureControlIcon.addEventListener("click", () => {
      if (this.guitar.name) {
        this.generateTextureControlMenu();
      } else {
        this.showAppearanceControlMenuWhenIsEmpty();
      }
    });

    document.addEventListener("guitarPartSelected", (e) => {
      this.guitar = e.detail;

      this.generateTextureControlMenu();
    });
  }

  showAppearanceControlMenuWhenIsEmpty() {
    if (!document.body.querySelector("#texture-card")) {
      const card = document.createElement("card-component");
      card.id = "texture-card";
      card.setAttribute("title", "Select a part of guitar");
      card.setPosition("10%", "10px", "auto");
      document.body.appendChild(card);
      this.textureCardEl = card;
    }

    const card = this.textureCardEl || document.querySelector("#texture-card");
    if (card) card.toggle();
  }

  generateTextureControlMenu() {
    if (
      document.body.querySelector("#texture-card") &&
      !document.body
        .querySelector("#texture-card")
        .shadowRoot.firstElementChild.classList.contains("open")
    ) {
      const card =
        this.textureCardEl || document.querySelector("#texture-card");
      card.open();
    }
    if (!document.body.querySelector("#texture-card")) {
      const card = document.createElement("card-component");
      card.id = "texture-card";
      const selectedPartName = this.guitar.name;
      card.setAttribute("title", `${selectedPartName} - Change color`);
      card.appendContent(texturesTemplate.default);
      this.isTextureTemplate = true;
      card.setPosition("10%", "10px", "auto");
      document.body.appendChild(card);
      this.textureCardEl = card;
      if (card) card.open();
    }
    if (this.guitar.name || document.body.querySelector("#texture-card")) {
      const card =
        this.textureCardEl || document.querySelector("#texture-card");
      const selectedPartName = this.guitar.name || "Guitar";
      card.setAttribute("title", `${selectedPartName} - Change color`);
      if (!this.isTextureTemplate) {
        card.appendContent(texturesTemplate.default);
      }
      this.isTextureTemplate = true;
    }
    const card = document.body.querySelector("#texture-card");

    if (card) {
      card.addEventListener("click", (event) =>
        this.checkWhichTexturenWasClicked(event),
      );

      card.addEventListener("input", (event) => {
        // TODO: implemnt checkWhichInputWasChanged to check which input was changed and update the texture accordingly
        this.checkWhichInputWasChanged(event);
      });

      card.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (!file) return;

        this.updateSelectedStickerFromFile(file);
      });
    }
  }

  checkWhichInputWasChanged(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const id = target.id;

    if (id === "roughness") {
      this.changeIntersectedObjectMaterialRoughness(target.value);
    }

    if (id === "metalness") {
      this.changeIntersectedObjectMaterialMetalness(target.value);
    }

    if (id === "rotate") {
      this.rotateTexture(target.value);
    }

    if (id === "zoom") {
      this.zoomInOutTexture(target.value);
    }

    if (id === "moveX") {
      this.moveX(target.value);
    }

    if (id === "moveY") {
      this.moveY(target.value);
    }
  }

  checkWhichTexturenWasClicked(event) {
    if (event.target.classList.contains("texture-card")) {
      this.changeTexture(event);
    }
  }

  changeTexture(event) {
    const element = event.srcElement.style.backgroundImage;
    const urlMatch = element.match(
      /url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/,
    );

    const textureUrl = `${urlMatch[1] ?? ""}${urlMatch[2]}`;

    if (textureUrl && this.guitar) {
      const eventUI = new CustomEvent("textureChange", {
        detail: textureUrl,
      });
      document.dispatchEvent(eventUI);
    }
  }

  changeIntersectedObjectMaterialRoughness(roughness) {
    this.guitar.material.roughness = roughness;
  }

  changeIntersectedObjectMaterialMetalness(metalness) {
    this.guitar.material.metalness = metalness;
  }

  rotateTexture(newRotate) {
    const texture = this.guitar.material.map;
    if (texture) {
      const delta = newRotate - this.lastRotate;
      texture.rotation += THREE.MathUtils.degToRad(delta);
      texture.needsUpdate = true;
      this.lastRotate = newRotate;
    }
  }

  moveX(x) {
    const texture = this.guitar.material.map;
    if (texture) {
      texture.offset.x = x;
      texture.needsUpdate = true;
    }
  }

  moveY(y) {
    const texture = this.guitar.material.map;
    if (texture) {
      texture.offset.y = y;
      texture.needsUpdate = true;
    }
  }

  zoomInOutTexture(zoomValue) {
    if (!this.guitar.originalRepeat) {
      this.guitar.originalRepeat = this.guitar.material.map.repeat.clone();
    }

    const texture = this.guitar.material.map;
    if (texture) {
      texture.repeat.copy(this.guitar.originalRepeat).multiplyScalar(zoomValue);
      texture.needsUpdate = true;
    }
  }

  async updateSelectedStickerFromFile(file) {
    this.stickerContainer = document.querySelector(".texture-container");

    const blobUrl = await uploadImageToIndexedDb(file);

    if (!blobUrl) return;

    if (this.stickerContainer.children.length > 0) {
      const container = this.stickerContainer;
      const div = document.createElement("div");
      div.className = "texture-card";
      div.style.backgroundImage = `url('${blobUrl}')`;

      if (container.children.length >= 1) {
        container.insertBefore(div, container.children[1]);
      } else {
        container.appendChild(div);
      }
    }
  }
}
