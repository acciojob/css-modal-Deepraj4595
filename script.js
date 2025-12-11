//your JS code here. If required.
function openModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "flex";
  modal.classList.add("show");
}

function closeModal() {
  let modal = document.getElementById(modal);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
  }, 300);
}