// Sticky navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("sticky").style.background =
      "linear-gradient(to right, hsl(195.1, 100%, 50%), hsl(210.1,100%,50%))";
  } else {
    document.getElementById("sticky").style.background =
      "hsl(209.5, 100%, 22%, 0.5)";
  }
}

// Mobile menu
const menu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelector(".menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
});

// Liquid animation effect
new hoverEffect({
  parent: document.querySelector(".bg-img"),
  intensity: 0.3,
  image1: "./assets/images/img-1.jpg",
  image2: "./assets/images/img-2.JPG",
  displacementImage: "./assets/images/leaf.jpg",
});
