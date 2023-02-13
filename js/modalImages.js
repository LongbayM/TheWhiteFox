("use strict");

/////////////////////////
//// MODAL PICTURES ////
/////////////////////////

const tabsContainer = [
  ...document.querySelectorAll(".operations__gallery-row"),
];
const modal = document.querySelector(".modal-image");
const modalImg = document.querySelector(".img-modal");
const btnCloseModal = document.querySelector(".close-modal");

// View modal
const modalView = function (e) {
  const markup = `
  <img
  class="img-modal img-modal--1"
  id="modal"
  alt="#"
  src="${e}"
  onContextMenu="return false;"
  />`;
  modal.insertAdjacentHTML("afterbegin", markup);
};

// Open modal row
tabsContainer.forEach((img) =>
  img.addEventListener("click", function (e) {
    modalView(e.target.src);
    modal.classList.remove("hidden");
  })
);

// Close Modal
btnCloseModal.addEventListener("click", function () {
  const modalEl = document.getElementById("modal");
  modal.classList.add("hidden");
  modalEl.remove();
});

// Close Modal click on overlay
modal.addEventListener("click", function () {
  const modalEl = document.getElementById("modal");
  modal.classList.add("hidden");
  modalEl.remove();
});

// Close Modal ESC key
document.addEventListener("keydown", (e) => {
  const modalEl = document.getElementById("modal");
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    modalEl.remove();
  }
});
