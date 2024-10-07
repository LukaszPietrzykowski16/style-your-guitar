import { updateColor, updateRoughness, updateMetalness } from "./main";

export function displayTooltipOnTheScreen(
  clickX,
  clickY,
  color,
  roughness,
  metalness
) {
  const tooltipTemplate = `
	<div id="tooltip">
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
        min="0"
        max="2"
        step="0.01"
        value="${roughness}"
        id="roughness"
      />
      <p>Metalness</p>
      <input
        type="range"
        min="0"
        max="2"
        step="0.01"
        value="${metalness}"
        id="metalness"
      />
	  <button id="save-button"> Save </button>
	</div>
	`;

  const tooltipContainer = document.querySelector("#tooltip-container");
  const div = document.createElement("div");
  div.innerHTML = tooltipTemplate;

  tooltipContainer.appendChild(div);
  const colorInput = document.querySelector("#color-picker");
  const roughnessInput = document.querySelector("#roughness");
  const metalnessInput = document.querySelector("#metalness");

  const saveButton = document.querySelector("#save-button");

  saveButton.addEventListener("click", () => {
    removeTooltip();
    updateColor(colorInput.value);
    updateRoughness(roughnessInput.value);
    updateMetalness(metalnessInput.value);
  });
}

export function removeTooltip() {
  document.querySelector("#tooltip").remove();
}
