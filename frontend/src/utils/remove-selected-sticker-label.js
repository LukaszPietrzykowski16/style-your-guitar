export const removeSelectedStickerLabel = () => {
  document.querySelectorAll(".selected").forEach((el) => {
    el.classList.remove("selected");
    const label = el.querySelector(".selected-label");
    if (label) label.remove();
  });
};
