function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  // document.body.classList.add("no-scroll");
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
}
