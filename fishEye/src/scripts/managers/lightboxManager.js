async function getLightbox(photographerId) {
  const dataLightbox = photographersData.media.filter(
    (m) => m.photographerId === parseInt(photographerId)
  );
  const fullName = document.querySelector(".photographer-name");
  const namePart = fullName.textContent.split(" ");
  let firstName = namePart[0];
  if (firstName.includes("-")) {
    let nameParts = fullName.textContent.replace("-", " ").split(" ");
    firstName = nameParts[0] + " " + nameParts[1];
  }
  const images = dataLightbox
    .filter((item) => item.image)
    .map((item) => ({ image: item.image, title: item.title }));

  const videos = dataLightbox
    .filter((item) => item.video)
    .map((item) => ({ video: item.video, title: item.title }));

  const lightbox = { images, videos, firstName };
  return lightbox;
}

async function displayDataLightbox(lightbox, initialIndex) {
  const lightboxSection = document.querySelector("#lightbox_modal");
  if (!lightbox || lightbox.length === 0) {
    console.error("No lightbox data found.");
    return;
  }

  const lightboxObj = lightboxFactory(lightbox, initialIndex);
  const userLightbox = lightboxObj.createLightbox();
  lightboxSection.innerHTML = ""; // Clear the lightbox section before adding new content
  lightboxSection.appendChild(userLightbox); // Append the lightbox element to the section

  const closeNav = document.querySelector(".lightbox-nav-close");
  closeNav.onclick = () => closeModaLightbox();

  const leftNav = document.querySelector(".lightbox-nav-left");
  leftNav.onclick = () => lightboxObj.previousMedia();

  const rightNav = document.querySelector(".lightbox-nav-right");
  rightNav.onclick = () => lightboxObj.nextMedia();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModaLightbox();
    } else if (event.key === "ArrowLeft") {
      lightboxObj.previousMedia();
    } else if (event.key === "ArrowRight") {
      lightboxObj.nextMedia();
    } else if (event.key === " ") {
      const lightboxMedia = document.querySelector(".lightbox-media-container");
      const video = lightboxMedia.querySelector("video");
      if (video && video.paused) {
        video.play();
      } else if (video) {
        video.pause();
      }
    }
  });
}

async function initLightbox(id, initialIndex) {
  try {
    const lightbox = await getLightbox(id);
    displayDataLightbox(lightbox, initialIndex);
  } catch (error) {
    console.error("Error initializing lightbox:", error);
  }
}
