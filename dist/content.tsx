// content.tsx
/// <reference types="chrome" />
const iconURL:string = chrome.runtime.getURL("X.png");
console.log("iconURL:", iconURL);

const iconImage = document.createElement("img");
iconImage.src = iconURL;
iconImage.style.position = "fixed";
iconImage.style.bottom = "60px";
iconImage.style.right = "30px";
iconImage.style.width = "50px";
iconImage.style.height = "50px";
iconImage.style.zIndex = "9999";
iconImage.style.cursor = "pointer";

document.body.appendChild(iconImage);
let customPopup;

iconImage.addEventListener("click", () => {
  if (!customPopup) {
    customPopup = document.createElement("iframe");
    customPopup.src = chrome.runtime.getURL("index.html");
    customPopup.style.position = "fixed";
    customPopup.style.top = "5px";
    customPopup.style.right = "30px";
    customPopup.style.width = "400px";
    customPopup.style.height = "500px";
    customPopup.style.border = "none";
    customPopup.style.zIndex = "99999";

    document.body.appendChild(customPopup);
  } else {
    customPopup.style.display =
      customPopup.style.display === "none" ? "block" : "none";
  }
});

let offsetX;
let offsetY;

iconImage.addEventListener("dragstart", (e) => {
  console.log("Icon dragged start", e);
  offsetX = e.clientX - iconImage.getBoundingClientRect().left;
  offsetY = e.clientY - iconImage.getBoundingClientRect().top;
  const dragImage = new Image();
  dragImage.src = "/X.png";
  if (e.dataTransfer != null) {
    e.dataTransfer.setDragImage(dragImage, offsetX, offsetY);
  }
});

iconImage.addEventListener("drag", (e) => {
  iconImage.style.top = e.clientY - offsetY + "px";
  iconImage.style.left = e.clientX - offsetX + "px";

  const top = e.clientY - offsetY;
  const left = e.clientX - offsetX;
  const right = left + iconImage.offsetWidth;
  const bottom = top + iconImage.offsetHeight;

  localStorage.setItem(
    "iconPosition",
    JSON.stringify({ top, right, bottom, left })
  );
});

document.addEventListener("dragover", (e) => {
  console.log("Icon dragged", e);
  e.preventDefault();
});

// When restoring the icon's position from localStorage
const storedPosition = localStorage.getItem("iconPosition");
if (storedPosition) {
  const { top, right, bottom, left } = JSON.parse(storedPosition);
  const width = right - left;
  const height = bottom - top;
  iconImage.style.inset = `${top}px ${right}px ${bottom}px ${left}px`;
  iconImage.style.width = width + "px";
  iconImage.style.height = height + "px";
}
