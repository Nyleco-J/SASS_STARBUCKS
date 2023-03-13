const kamote = document.querySelectorAll(".links__item h4");
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener("click", () => {
        kamoteq.nextElementSibling.classList.toggle("open");
        kamoteq.querySelector("i").classList.toggle("open")
    })
})
const headerbg = document.querySelector(".background");
const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
  headerbg.classList.toggle("open");
});

