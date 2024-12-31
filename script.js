const menu = document.querySelector(".menu-icon");
const popupMenu = document.querySelector(".popup-menu");
const closeIcon = document.querySelector(".ri-close-fill");

menu.addEventListener("click", (e) => {
  e.stopPropagation()
  popupMenu.classList.add("popup-menu-open");
  menu.classList.add("menu-icon-hide");
});

closeIcon.addEventListener("click", () => {
  if (
    popupMenu.classList.contains("popup-menu-open") &&
    menu.classList.contains("menu-icon-hide")
  ) {
    popupMenu.classList.remove("popup-menu-open");
    menu.classList.remove("menu-icon-hide");
  }
});

window.addEventListener("click", () => {
  if (
    popupMenu.classList.contains("popup-menu-open") &&
    menu.classList.contains("menu-icon-hide")
  ) {
    popupMenu.classList.remove("popup-menu-open");
    menu.classList.remove("menu-icon-hide");
  }
});
