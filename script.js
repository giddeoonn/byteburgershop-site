const offScreenMenu = document.querySelector(".off-screen-menu");
const blurBg = document.querySelector(".blur");
const hamMenu = document.querySelector(".mobile-ham-btn");
const closeMenu = document.querySelector(".close-btn");

hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  blurBg.classList.toggle("active");
});
closeMenu.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  blurBg.classList.remove("active");
});

// THIS IS FOR THE MENU BUTTONS, VERY BAD I KNOW HAHAHAHAHA
const burger_only = document.getElementById("burger-menu");
const sides_only = document.getElementById("sides-menu");
const drinks_only = document.getElementById("drinks-menu");

burger_only.classList.toggle("active");
sides_only.classList.toggle("active");
drinks_only.classList.toggle("active");

function menuShowAll() {
  burger_only.classList.remove("active");
  sides_only.classList.remove("active");
  drinks_only.classList.remove("active");

  burger_only.classList.toggle("active");
  sides_only.classList.toggle("active");
  drinks_only.classList.toggle("active");
}
function burgersOnly() {
  burger_only.classList.remove("active");
  burger_only.classList.toggle("active");

  sides_only.classList.remove("active");
  drinks_only.classList.remove("active");
}
function sidesOnly() {
  sides_only.classList.remove("active");
  sides_only.classList.toggle("active");

  burger_only.classList.remove("active");
  drinks_only.classList.remove("active");
}
function drinksOnly() {
  drinks_only.classList.remove("active");
  drinks_only.classList.toggle("active");

  burger_only.classList.remove("active");
  sides_only.classList.remove("active");
}
