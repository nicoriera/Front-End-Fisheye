function displayModalLightbox() {
  const modalLightbox = document.getElementById("lightbox_modal");
  modalLightbox.style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closeModaLightbox() {
  const modalLightbox = document.getElementById("lightbox_modal");
  modalLightbox.style.display = "none";
  document.body.classList.remove("no-scroll");
}
