import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";
import { uploadImageToIndexedDb } from "../../utils/upload-image-to-indexed-db";
import * as THREE from "three";
import "../../shared/components/card.component";
import * as stickersTemplate from "./stickers.html?raw";
import { removeSelectedStickerLabel } from "../../utils/remove-selected-sticker-label";

export class Stickers {
  stickerControlIcon = document.querySelector(".sticker-control-icon");
  stickerContainer = document.querySelector(".sticker-container");

  textureLoader = new THREE.TextureLoader();

  scene = {};
  isStickerOn = false;
  selectedSticker = {};

  constructor() {
    this.initListingForIcons();
  }

  stickersProxy = new Proxy([], {
    set(target, property, value) {
      target[property] = value;
      this.updateView(target);
      return true;
    },

    updateView(targets) {
      document.querySelector("#sticker-config").innerHTML = `
	  ${targets
      .map(
        (target) =>
          `
		  <div class="texture-card-wrapper">
				<div class="texture-card-actions with-thumb">
			  <div class="texture-card thumb" style="background-image: url(${target.textureUrl});"></div>
			  <div class="action-buttons">
				<button class="remove-sticker" data-value="${target.texture.uuid}"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg> </button>
				<button class="mirror-sticker" data-value="${target.texture.uuid}"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M360-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160v80H200v560h160v80Zm80 80v-880h80v880h-80Zm160-80v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80q0 33-23.5 56.5T760-120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z"/></svg> </button>
			  </div>
			</div>
			<div class="texture-card-controls">
			  <div class="control-group">
				<p class="control-label">Sticker Size</p>
				<input type="range" min="0" max="3" step="0.1" value="1" class="sticker-size" data-value="${target.texture.uuid}" />
			  </div>
			  <div class="control-group">
				<p class="control-label">Sticker Rotation</p>
				<input type="range" min="-180" max="180" step="1" value="0" class="sticker-rotation" data-value="${target.texture.uuid}" />
			  </div>
			</div>
	  
		  </div>
		  `
      )
      .join("")}
	`;
    },
  });

  checkElementsSticker() {
    this.stickerContainer = document.querySelector(".sticker-container");

    Array.from(this.stickerContainer.children).forEach((stickerEl) => {
      stickerEl.addEventListener("click", (event) => {
        const clickedElement = event.target;

        removeSelectedStickerLabel();

        this.selectedSticker = clickedElement;

        clickedElement.classList.add("selected");

        const style = window.getComputedStyle(clickedElement);
        const backgroundImage = style.backgroundImage;
        const urlMatch = backgroundImage.match(
          /url\(["']?(https?:\/\/[^\/]+\/)?(?!undefinedblob:)(.*?)["']?\)/
        );

        if (!urlMatch) {
          return;
        }
        const textureUrl = urlMatch[1]
          ? `${urlMatch[1]}${urlMatch[2]}`
          : `${urlMatch[2]}`;

        if (textureUrl) {
          this.putStickerOnTheGuitar(textureUrl);
        }
      });
    });
  }

  initListingForIcons() {
    this.stickerControlIcon.addEventListener("click", () => {
      this.generateStickerControlMenu();
    });
  }

  async updateSelectedStickerFromFile(file) {
    this.stickerContainer = document.querySelector(".sticker-container");

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
      this.checkElementsSticker();
    }
  }

  generateStickerControlMenu() {
    if (!document.body.querySelector("#sticker-card")) {
      const card = document.createElement("card-component");
      card.id = "sticker-card";
      card.setAttribute("title", "Change sticker");
      card.appendContent(stickersTemplate.default);
      card.setPosition("20%", "auto", "10px");
      document.body.appendChild(card);
      this.stickerCardEl = card;
    }
    const card = this.stickerCardEl || document.querySelector("#sticker-card");
    if (card) card.toggle();

    this.checkElementsSticker();

    card.addEventListener("click", (event) =>
      this.checkWhichButtonWasClicked(event)
    );

    card.addEventListener("input", (event) => {
      this.checkWhichInputWasChanged(event);
    });

    card.addEventListener("change", (event) => {
      const file = event.target.files[0];

      if (!file) return;

      this.updateSelectedStickerFromFile(file);
    });
  }

  applySticker(position, intersectedObject, helper, scene) {
    this.scene = scene;

    const decalMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      depthWrite: false,
      depthTest: true,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      transparent: true,
      map: this.selectedSticker,
      specular: 0x444444,
      wireframe: false,
    });

    const sizeVal =
      parseFloat(document.querySelector("#sticker-size")?.value) || 1.0;

    const rotDeg =
      parseFloat(document.querySelector("#sticker-rotation")?.value) || 0;

    helper.rotation.set(0, 0, THREE.MathUtils.degToRad(rotDeg));

    const sizeVec = new THREE.Vector3(sizeVal, sizeVal, sizeVal);

    const decalGeometry = new DecalGeometry(
      intersectedObject,
      position.clone(),
      helper.rotation.clone(),
      sizeVec.clone()
    );
    const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);

    decalMesh.userData = {
      isDecal: true,
      targetObject: intersectedObject,
      position: position.clone(),
      orientation: helper.rotation.clone(),
      size: sizeVec.clone(),
    };

    this.stickersProxy.push({
      textureUrl: decalMesh.material.map.image.src,
      texture: decalMesh,
    });
    scene.add(decalMesh);
    this.selectedSticker = {};
  }

  checkWhichButtonWasClicked(e) {
    if (e.target.classList.contains("remove-sticker")) {
      this.removeDecalByUUID(e.target.dataset.value);
    }
    if (e.target.classList.contains("mirror-sticker")) {
      this.mirrorDecalByUUID(e.target.dataset.value);
    }
  }

  checkWhichInputWasChanged(e) {
    if (e.target.classList.contains("sticker-size")) {
      this.scaleDecalByUUID(e.target.dataset.value, parseFloat(e.target.value));
    }
    if (e.target.classList.contains("sticker-rotation")) {
      this.rotateDecalByUUID(e.target.dataset.value, e.target.value);
    }
  }

  putStickerOnTheGuitar(sticker) {
    const clickedSticker = this.textureLoader.load(sticker);
    this.selectedSticker = clickedSticker;
    this.isStickerOn = true;
    const eventUI = new CustomEvent("stickerSelected");
    document.dispatchEvent(eventUI);
  }

  mirrorDecalByUUID(uuid) {
    const entry = this.stickersProxy.find(
      (decal) => decal.texture.uuid === uuid
    );
    if (!entry) return;

    const decalMesh = entry.texture;
    const ud = decalMesh.userData || {};

    if (!ud.targetObject || !ud.position || !ud.orientation || !ud.size) return;

    const newEuler = ud.orientation.clone();
    newEuler.y += Math.PI;

    const newGeometry = new DecalGeometry(
      ud.targetObject,
      ud.position.clone(),
      newEuler,
      ud.size.clone()
    );

    decalMesh.geometry?.dispose?.();
    decalMesh.geometry = newGeometry;

    decalMesh.userData.orientation = newEuler.clone();
  }

  rotateDecalByUUID(uuid, deltaDeg) {
    const entry = this.stickersProxy.find(
      (decal) => decal.texture.uuid === uuid
    );
    if (!entry) return;

    const decalMesh = entry.texture;
    const ud = decalMesh.userData || {};

    if (!ud.targetObject || !ud.position || !ud.orientation || !ud.size) {
      decalMesh.rotation.z = THREE.MathUtils.degToRad(deltaDeg);
      return;
    }

    const newEuler = ud.orientation.clone();
    newEuler.z = THREE.MathUtils.degToRad(deltaDeg);

    const newGeometry = new DecalGeometry(
      ud.targetObject,
      ud.position.clone(),
      newEuler,
      ud.size.clone()
    );

    decalMesh.geometry?.dispose?.();
    decalMesh.geometry = newGeometry;
    decalMesh.userData.orientation = newEuler;
  }

  scaleDecalByUUID(uuid, scaleValue) {
    const entry = this.stickersProxy.find(
      (decal) => decal.texture.uuid === uuid
    );

    if (!entry) return;

    const decalMesh = entry.texture;
    const ud = decalMesh.userData || {};

    if (!ud.targetObject || !ud.position || !ud.orientation || !ud.size) return;

    const newSize = new THREE.Vector3(scaleValue, scaleValue, scaleValue);

    const newGeometry = new DecalGeometry(
      ud.targetObject,
      ud.position.clone(),
      ud.orientation.clone(),
      newSize
    );

    decalMesh.geometry?.dispose?.();
    decalMesh.geometry = newGeometry;

    decalMesh.userData.size = newSize.clone();
  }

  removeDecalByUUID(uuid) {
    const decalIndex = this.stickersProxy.findIndex(
      (decal) => decal.texture.uuid === uuid
    );

    this.scene.remove(this.stickersProxy[decalIndex].texture);

    this.stickersProxy.splice(decalIndex, 1);

    if (!this.stickersProxy.length) {
      document.querySelector("#sticker-config").innerHTML =
        "<p class='select-sticker'> Select sticker </p>";
    }
  }
}
