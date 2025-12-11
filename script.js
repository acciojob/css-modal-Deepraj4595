function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  setTimeout(() => modal.style.display = "none", 300);
}


document.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  const content = document.querySelector(".modal-content");

  if (modal.classList.contains("show") && !content.contains(e.target)) {
    closeModal();
  }
});