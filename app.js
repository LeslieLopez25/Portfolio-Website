// Sticky navbar
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("sticky").style.background = "#0866f1";
  } else {
    document.getElementById("sticky").style.background = "none";
  }
}

// Liquid animation effect
new hoverEffect({
  parent: document.querySelector(".bg-img"),
  intensity: 0.3,
  image1: "/images/img-1.jpg",
  image2: "./images/img-2.jpg",
  displacementImage: "/images/leaves.jpg"
});
