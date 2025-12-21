import * as cardComponent from "./card.component.html?raw";
import * as cardStyles from "./card.css?raw";

export class CardComponent extends HTMLElement {
  static get observedAttributes() {
    return ["open", "title"];
  }

  constructor() {
    super();
    this._open = this.hasAttribute("open");
    this._title = this.getAttribute("title") || "";

    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = cardComponent.default;

    const styleEl = document.createElement("style");
    styleEl.textContent = cardStyles.default;
    shadow.appendChild(styleEl);

    this._els = {
      wrapper: shadow.querySelector(".card"),
      title: shadow.querySelector(".title"),
      close: shadow.querySelector(".close-icon"),
    };

    this._els.title.textContent = this._title;
    this._bindEvents();
    if (this._open) this._show();
  }

  _bindEvents() {
    if (this._els.close && !this._els.close.dataset.listenerAdded) {
      this._els.close.addEventListener("click", () => this.close());
      this._els.close.dataset.listenerAdded = "true";
    }
  }

  attributeChangedCallback(name, _old, value) {
    if (name === "title") {
      this._title = value || "";
      if (this._els?.title) this._els.title.textContent = this._title;
    }
    if (name === "open") {
      this._open = this.hasAttribute("open");
      this._open ? this._show() : this._hide();
    }
  }

  open() {
    this.setAttribute("open", "");
  }

  close() {
    this.removeAttribute("open");
  }

  toggle() {
    this._open ? this.close() : this.open();
  }

  _show() {
    if (!this._els?.wrapper) return;
    this._els.wrapper.classList.add("open");
    this._els.wrapper.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      easing: "ease-in-out",
      fill: "forwards",
    });
    this.dispatchEvent(new CustomEvent("card-open", { bubbles: true }));
  }

  _hide() {
    if (!this._els?.wrapper) return;
    const anim = this._els.wrapper.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 500,
      easing: "ease-in-out",
      fill: "forwards",
    });
    anim.onfinish = () => {
      this._els.wrapper.classList.remove("open");
      this.dispatchEvent(new CustomEvent("card-close", { bubbles: true }));
    };
  }
}

if (!customElements.get("card-component")) {
  customElements.define("card-component", CardComponent);
}
