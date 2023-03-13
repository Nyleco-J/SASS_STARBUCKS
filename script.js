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

const coffeefree =document.querySelectorAll(".star__nav__link");
const coffeeContent =document.querySelectorAll(".coffee__sec__content");
coffeefree.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent= document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  })
})

function removeActiveStar(){
  coffeefree.forEach((star) => {
    star.classList.remove("active");
  })
}

function removeActiveContent(){
  coffeeContent.forEach((star) => {
    star.classList.remove("active");
  })
}
