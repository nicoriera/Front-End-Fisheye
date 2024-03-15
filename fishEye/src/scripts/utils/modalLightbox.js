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

function previousMedia() {
  console.log("Previous media");
  const media = document.querySelector(".lightbox-media");
  media.style.transform = "translateX(-200%)";
  setTimeout(() => {
    media.style.transform = "translateX(0)";
  }, 500);
}

function nextMedia() {
  console.log("Next media");
  const media = document.querySelector(".lightbox-media");
  media.style.transform = "translateX(200%)";
  setTimeout(() => {
    media.style.transform = "translateX(0)";
  }, 500);
}
