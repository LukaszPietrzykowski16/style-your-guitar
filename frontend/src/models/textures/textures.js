import * as THREE from "three";
import "../../shared/components/card.component";
import * as texturesTemplate from "./textures.html?raw";

export class Textures {
  textureControlIcon = document.querySelector(".appearence-control-icon");
  textureContainer = document.querySelector(".texture-container");

  textureLoader = new THREE.TextureLoader();

  guitar = {};
  isTextureOn = false;

  constructor() {
    console.log("Textures module loaded");
    this.initListingForIcons();
  }

  initListingForIcons() {
    this.textureControlIcon.addEventListener("click", () => {
      console.log(this.guitar);
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
      card.setAttribute("title", "Select a part of guitar to customize it!");
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
    }
  }
}
