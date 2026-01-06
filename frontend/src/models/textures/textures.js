import * as THREE from "three";
import "../../shared/components/card.component";
import * as texturesTemplate from "./textures.html?raw";

export class Textures {
  textureControlIcon = document.querySelector(".appearence-control-icon");
  textureContainer = document.querySelector(".texture-container");

  textureLoader = new THREE.TextureLoader();

  guitar = {};
  isTextureOn = false;
  isTextureTemplate = false;

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
        this.checkWhichTexturenWasClicked(event)
      );

      card.addEventListener("input", (event) => {
        this.checkWhichInputWasChanged(event);
      });
    }
  }

  checkWhichTexturenWasClicked(event) {
    const element = event.srcElement.style.backgroundImage;
    const urlMatch = element.match(
      /url\(["']?(https?:\/\/[^\/]+\/)?(.*?)["']?\)/
    );
    const textureUrl = `${urlMatch[1] ?? ""}${urlMatch[2]}`;

    if (textureUrl && this.guitar) {
      const eventUI = new CustomEvent("textureChange", {
        detail: textureUrl,
      });
      document.dispatchEvent(eventUI);
    }
  }
}
