const menuEl = document.querySelector(".header-mob-menu");
const menuLinkEl = document.querySelectorAll(".header-mob-item-link");
const menuBtn = document.querySelector(".header-btn");

menuBtn.addEventListener("click", (event) => {
  menuEl.classList.toggle("open");
});

menuLinkEl.forEach((link) => {
  link.addEventListener("click", (event) => {
    menuEl.classList.remove("open");
  });
});
