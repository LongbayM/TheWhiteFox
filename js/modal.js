("use strict");

/////////////////////////
//// MODAL ////
/////////////////////////

const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelectorAll(".modal-btn");
const btnCloseModal = document.querySelector(".close-modal");

// Open modal row1
btnOpenModal.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.classList.remove("hidden");
  })
);

// Close Modal
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

// Close Modal click on overlay
modal.addEventListener("click", function () {
  const modalEl = document.getElementById("modal");
  modal.classList.add("hidden");
});

// Close Modal ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});

///////////////////

const changeWorkHours = document.querySelector(".calendar");
console.log(changeWorkHours);
