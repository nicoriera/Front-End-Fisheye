async function getPhotographer(id) {
  const fetchPhotographers = await fetch("./src/data/photographers.json");
  const photographersData = await fetchPhotographers.json();
  const photographer = photographersData.photographers.find(
    (p) => p.id === parseInt(id)
  );
  return photographer;
}

async function displayData(photographer) {
  if (!photographer) {
    console.error("Photographer not found.");
    return;
  }

  const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  photographersSection.insertAdjacentHTML("afterbegin", userCardDOM.outerHTML);
}

async function init(id) {
  try {
    const photographer = await getPhotographer(id);
    displayData(photographer);
  } catch (error) {
    console.error("Error initializing photographer:", error);
  }
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
init(id);

async function getMedia(photographerId) {
  const fetchPhotographers = await fetch("./src/data/photographers.json");
  const photographersData = await fetchPhotographers.json();
  const photographer = photographersData.photographers.find(
    (p) => p.id === parseInt(photographerId)
  );
  return photographer ? photographer.media : [];
}

async function displayDataMedia(media) {
  const mediasSection = document.querySelector("#content-media");
  if (!media || media.length === 0) {
    console.error("No media data found.");
    return;
  }
  media.forEach((mediaItem) => {
    const mediasModel = mediaCardTemplate(mediaItem);
    const userCardMedia = mediasModel.getUserCardMedia();
    mediasSection.appendChild(userCardMedia);
  });
}

async function initMedia() {
  try {
    const medias = await getMedia(id);
    displayDataMedia(medias);
  } catch (error) {
    console.error("Error initializing media:", error);
  }
}

initMedia();

// Dropdown menu
function openDropdown() {
  var menu = document.getElementById("dropdownMenu");
  var menuIcon = document.getElementById("dropdownIcon");

  // Toggle l'affichage du menu
  menu.style.display = menu.style.display === "none" ? "block" : "none";

  // Toggle l'icône de l'icone du menu
  menuIcon.classList.toggle("fa-chevron-down");
}
