const nav = document.querySelector('.navContainer')
const navBurger = document.querySelector(".navburger")
const close = document.querySelector("#close")
const menuBurger = document.querySelector('#menuBurger')
const logo = document.querySelector(".logo")

menuBurger.addEventListener("click", () => {
  nav.style.animation = "navAnimeIn 0.5s forwards"
  menuBurger.style.zIndex = "0"
  logo.style.backgroundColor = "white"
})
close.addEventListener("click", () => {
  console.log("test");
  nav.style.animation = "navAnimeOut 0.5s forwards"
  menuBurger.style.zIndex = "151"
  logo.style.backgroundColor = "rgba(255, 255, 255, 0)"
})