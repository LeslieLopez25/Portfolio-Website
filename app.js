// STICKY NAVBAR
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("sticky").style.backgroundColor =
      "hsl(210.1,100%,50%)";
  } else {
    document.getElementById("sticky").style.background =
      "hsl(209.5, 100%, 22%, 0.5)";
  }
}

// MOBILE MENU
const menu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelector(".menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
});

// LIQUID ANIMATION EFFECT
new hoverEffect({
  parent: document.querySelector(".bg-img"),
  intensity: 0.3,
  image1: "./assets/images/img-1.jpg",
  image2: "./assets/images/img-2.jpg",
  displacementImage: "./assets/images/leaf.jpg",
});

// LOADER
onload = () => {
  const load = document.getElementById("load");

  setTimeout(() => {
    load.style.display = "none";
  }, 2500);
};
