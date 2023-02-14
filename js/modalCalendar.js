("use strict");

/////////////////////////
//// MODAL CALENDAR ////
/////////////////////////

const modal = document.querySelector(".modal-calendar");
const btnOpenModal = document.querySelectorAll(".modal-btn");
const btnCloseModal = document.querySelector(".close-modal");

// Open Calendar
btnOpenModal.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.classList.remove("hidden");
  })
);

// Close btn
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

// Close click on overlay
modal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

// Close ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});
