function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closeModalContact() {
  const modal = document.querySelector(".modal-close-button");
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
}
