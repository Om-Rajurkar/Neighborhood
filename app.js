var modallink = document.querySelector(".modal-link");
var modalbg = document.querySelector(".modal-bg");
var modalclose = document.querySelector(".modal-close");

modallink.addEventListener("click", function () {
  modalbg.classList.add("bg-active");
});

modalclose.addEventListener("click", function () {
  modalbg.classList.remove("bg-active");
});
