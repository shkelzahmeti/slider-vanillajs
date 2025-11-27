const slidesEl = document.querySelectorAll(".slide");
const nextBtnEl = document.querySelector(".nextBtn");
const prevBtnEl = document.querySelector(".prevBtn");

slidesEl.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtnEl.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtnEl.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slidesEl.length) counter = 0;
  if (counter < 0) counter = slidesEl.length - 1;

  // if (counter < slidesEl.length - 1) {
  //   nextBtnEl.style.display = "block";
  // } else {
  //   nextBtnEl.style.display = "none";
  // }

  // if (counter > 0) {
  //   prevBtnEl.style.display = "block";
  // } else {
  //   prevBtnEl.style.display = "none";
  // }

  slidesEl.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// prevBtnEl.style.display = "none";

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    counter--;
    carousel();
  }

  if (e.key === "ArrowRight") {
    counter++;
    carousel();
  }
});
