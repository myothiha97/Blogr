const nav_lists = document.querySelectorAll(".header-nav-left-list > li");
const navListsIcons = document.querySelectorAll(
  ".header-nav-left-list > li > a > i"
);

function handleHoverList(nl) {
  const icon = nl.querySelector("a > i");

  if (icon.classList.value.includes("fa-chevron-down")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
  //   icon.toggleClass("fa-chevron-up fa-chevron-down");
}

nav_lists.forEach((nl) => {
  nl.addEventListener("click", () => handleHoverList(nl));
});

const hiddenNav = document.querySelector(".header-nav-hidden");
console.log(hiddenNav);
const toPopup = document.querySelector(".click-popup");
hiddenNav.addEventListener("click", () => {
  toPopup.classList.toggle("activePopup");
});

const clickPopupIcons = document.querySelectorAll(".click-popup-top-icon");
const popMenu = document.querySelector(".click-popup-menu");
clickPopupIcons.forEach((clickIcon) => {
  clickIcon.addEventListener("click", () => {
    const arrow = clickIcon.querySelector("i");
    if (arrow.classList.value.includes("fa-chevron-down")) {
      arrow.classList.remove("fa-chevron-down");
      arrow.classList.add("fa-chevron-up");
    } else {
      arrow.classList.remove("fa-chevron-up");
      arrow.classList.add("fa-chevron-down");
    }
  });
});
