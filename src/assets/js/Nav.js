const nav = document.querySelector('.navContainer')
const navBurger = document.querySelector(".navburger")
const close = document.querySelector("#close")

menuBurger.addEventListener("click", () => {
  nav.style.animation = "navAnimeIn 0.5s forwards"
  menuBurger.style.zIndex = "0"
})
close.addEventListener("click", () => {
  console.log("test");
  nav.style.animation = "navAnimeOut 0.5s forwards"
  menuBurger.style.zIndex = "151"
})