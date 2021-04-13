"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

const close = function () {
  modal.classList.add("hidden");
  //document.querySelector(".hidden").style.display = "none";
  overlay.classList.add("hidden");
  //overlay.style.display = "none";
};

const open = function () {
  modal.classList.remove("hidden");
  // document.querySelector(".hidden").style.display = "inline";
  overlay.classList.remove("hidden");
  //overlay.style.display = "inline";
};
const esc = function (e) {
  console.log(e.key);
  e;
  if (e.key === "e") {
    // modal.classList.add("hidden");
    // overlay.classList.add("hidden");
    close();
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", open);
}

btnCloseModal.addEventListener("click", close);

overlay.addEventListener("click", close);

document.addEventListener("keypress", esc);
