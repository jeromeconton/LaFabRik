
window.addEventListener("scroll", function() {
  
let container2 = document.querySelector(".container2_presentation");
  if (container2) {
    let windowHeight = window.innerHeight;
    let container2Top = container2.offsetTop;

    if (window.scrollY > container2Top - windowHeight / 2) {
      container2.style.opacity = 1;
    }
  }

  let container3 = document.querySelector(".container3_presentation");
  if (container3) {
    let windowHeight = window.innerHeight;
    let container3Top = container3.offsetTop;

    if (window.scrollY > container3Top - windowHeight / 2) {
      container3.style.opacity = 1;
    }
  }
    
  let container4 = document.querySelector(".container4_presentation");
  if (container4) {
    let windowHeight = window.innerHeight;
    let container4Top = container4.offsetTop;

    if (window.scrollY > container4Top - windowHeight / 2) {
      container4.style.opacity = 1;
    }
  }

    
  let container5 = document.querySelector(".container5_presentation");
  if (container5) {
    let windowHeight = window.innerHeight;
    let container5Top = container5.offsetTop;

    if (window.scrollY > container5Top - windowHeight / 2) {
      container5.style.opacity = 1;
    }
  }
});
