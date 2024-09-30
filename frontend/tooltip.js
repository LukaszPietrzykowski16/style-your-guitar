import { updateColor } from "./main";

export function displayTooltipOnTheScreen(clickX, clickY, color) {
  const tooltipTemplate = `
	<div style="background-color: #333; color: white;  position: absolute; top:${clickY}px; left: ${clickX}px; z-index: 1000" id="tooltip">
      <p>Current color:</p>
      <input
        type="color"
        id="color-picker"
        name="color-picker"
        value="#${color}"
      />
      <p>Roughness</p>
      <input
        type="range"
        min="0.1"
        max="1"
        step="0.01"
        value="0.5"
        id="roughness"
      />
      <p>Metalness</p>
      <input
        type="range"
        min="0.1"
        max="1"
        step="0.01"
        value="0.5"
        id="metalness"
      />
	  <button id="save-button"> Save </button>
	</div>
	`;

  const div = document.createElement("div");
  div.innerHTML = tooltipTemplate;
  document.body.appendChild(div);
  const colorInput = document.querySelector("#color-picker");

  const saveButton = document.querySelector("#save-button");

  saveButton.addEventListener("click", () => {
    removeTooltip();
    updateColor(colorInput.value);
  });
}

export function removeTooltip() {
  document.querySelector("#tooltip").remove();
}
