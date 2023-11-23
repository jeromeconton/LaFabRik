window.addEventListener("scroll", function() {
  let container1 = document.querySelector(".accueil_container1");
  let windowHeight = window.innerHeight;
  let container1Top = container1.offsetTop;

  if (window.scrollY > container1Top - windowHeight / 2) {
    container1.style.opacity = 1;
  }

  let container2 = document.querySelector(".accueil_container2");
  let container2Top = container2.offsetTop;

  if (window.scrollY > container2Top - windowHeight / 2) {
    container2.style.opacity = 1;
  }

  let container3 = document.querySelector(".accueil_container3");
  let container3Top = container3.offsetTop;

  if (window.scrollY > container3Top - windowHeight / 2) {
    container3.style.opacity = 1;
  }

  let container4 = document.querySelector(".accueil_container4");
  let container4Top = container4.offsetTop;

  if (window.scrollY > container4Top - windowHeight / 2) {
    container4.style.opacity = 1;
  }

  let container5 = document.querySelector(".accueil_container5");
  let container5Top = container5.offsetTop;

  if (window.scrollY > container5Top - windowHeight / 2) {
    container5.style.opacity = 1;
  }

  let container6 = document.querySelector(".accueil_container6");
  let container6Top = container6.offsetTop;

  if (window.scrollY > container6Top - windowHeight / 2) {
    container6.style.opacity = 1;
  }
});