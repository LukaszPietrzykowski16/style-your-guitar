import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";
import { removeSelectedStickerLabel } from "../../utils/remove-selected-sticker-label";
import { uploadImageToIndexedDb } from "../../utils/upload-image-to-indexed-db";
import * as THREE from "three";

export class Stickers {
  closeStickerIcon = document.querySelector(".close-icon-sticker");
  stickerControl = document.querySelector("#sticker-control");
  stickerControlIcon = document.querySelector(".sticker-control-icon");
  stickerContainer = document.querySelector(".sticker-container");

  textureLoader = new THREE.TextureLoader();

  scene = {};
  isStickerOn = false;
  isStickerControlMenuGenerated = false;
  selectedSticker = {};
  isStickerOn = false;

  constructor() {
    this.initListingForIcons();
    this.initMutationObserverSticker();
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
    const rotateSticker = document.querySelectorAll(".sticker-rotation");
    const mirrorStickerBtns = document.querySelectorAll(".mirror-sticker");

    const fileLoaderSticker = document.querySelector("#stickerInput");

    if (!fileLoaderSticker.dataset.listenerAdded) {
      fileLoaderSticker.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (!file) return;

        this.updateSelectedStickerFromFile(file);

        fileLoaderSticker.dataset.listenerAdded = "true";
      });
    }

    Array.from(stickerContainer.children).forEach((stickerEl) => {
      fileLoaderSticker.dataset.listenerAdded = "true";
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

          stickerEl.dataset.listenerAdded = "true";
          fileLoaderSticker.dataset.listenerAdded = "false";
        });
      }
    });

    removeSticker.forEach((sticker) => {
      if (!sticker.dataset.listenerAdded) {
        sticker.addEventListener("click", (event) => {
          const decalUUID = event.target.dataset.value;
          this.removeDecalByUUID(decalUUID);
        });
      }
      sticker.dataset.listenerAdded = "true";
    });

    rotateSticker.forEach((sticker) => {
      if (!sticker.dataset.listenerAdded) {
        sticker.addEventListener("input", (event) => {
          const decalUUID = event.target.dataset.value;
          const rotation = event.target.value;
          this.rotateDecalByUUID(decalUUID, rotation);
        });
      }
      sticker.dataset.listenerAdded = "true";
    });

    mirrorStickerBtns.forEach((sticker) => {
      if (!sticker.dataset.listenerAdded) {
        sticker.addEventListener("click", (event) => {
          const decalUUID = event.target.dataset.value;
          if (this.mirrorDecalByUUID) {
            this.mirrorDecalByUUID(decalUUID, "x");
          }
        });
      }
      sticker.dataset.listenerAdded = "true";
    });

    document.querySelectorAll(".sticker-size").forEach((sticker) => {
      if (!sticker.dataset.listenerAdded) {
        sticker.addEventListener("input", (event) => {
          const uuid = event.target
            .getAttribute("data-value")
            .replace("size-", "");
          const scaleValue = parseFloat(event.target.value);
          this.scaleDecalByUUID(uuid, scaleValue);
        });
      }

      sticker.dataset.listenerAdded = "true";
    });

    if (closeStikcerIcon && !closeStikcerIcon.dataset.listenerAdded) {
      closeStikcerIcon.addEventListener("click", () =>
        this.hideStickerControlMenu()
      );
      closeStikcerIcon.dataset.listenerAdded = "true";
    }
  }

  applySticker(position, intersectedObject, helper, scene) {
    this.scene = scene;

    removeSelectedStickerLabel();

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

  putStickerOnTheGuitar(sticker) {
    const clickedSticker = this.textureLoader.load(sticker);
    this.selectedSticker = clickedSticker;
    this.isStickerOn = true;
    const eventUI = new CustomEvent("stickerSelected");
    document.dispatchEvent(eventUI);
  }

  initListingForIcons() {
    this.stickerControlIcon.addEventListener("click", () => {
      if (!this.isStickerControlMenuGenerated) {
        this.generateStickerControlMenu();
      }
      this.showStickerControlMenu();
    });
  }

  async updateSelectedStickerFromFile(file) {
    const stickerContainers = document.querySelectorAll(".sticker-container");

    const blobUrl = await uploadImageToIndexedDb(file);

    if (!blobUrl) return;

    if (stickerContainers.length > 0) {
      const container = stickerContainers[0];
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

  generateStickerControlMenu() {
    this.isStickerControlMenuGenerated = true;

    this.showStickerControlMenuAnimation();

    this.stickerControl.innerHTML = `
       <span
        class="section-header"
      >
        <span> Add sticker </span>
         <div class="close-icon-sticker"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></div>
      </span>
      
     

      <div>

      </div>
      <div class="sticker-container">
        <div class="texture-card custom-sticker-upload">
          <label for="stickerInput" class="custom-sticker-label">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            <span style="background-color: transparent;">Upload Sticker</span>
          </label>
          <input type="file" id="stickerInput" accept="image/*" style="display: none;"/>
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
        <p class="select-sticker"> Select sticker </p>
      </div>
    
      </div>
    `;
  }

  showStickerControlMenuAnimation() {
    this.stickerControl.animate(
      [{ opacity: 0 }, { opacity: 1, display: "flex" }],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  }

  hideStickerControlMenu() {
    this.stickerControl.animate(
      [{ opacity: 1 }, { opacity: 0, display: "none" }],
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
