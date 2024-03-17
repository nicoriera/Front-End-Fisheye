let photographersData = null;

async function fetchData() {
  const response = await fetch("./src/data/photographers.json");
  if (!response.ok) throw new Error("Network response was not ok.");
  photographersData = await response.json();
}

// PHOTOGRAPHER
async function getPhotographer(id) {
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

// MEDIA
async function getMedia(photographerId) {
  const fullName = document.querySelector(".photographer-name");
  const namePart = fullName.textContent.split(" ");
  let firstName = namePart[0];
  if (firstName.includes("-")) {
    let nameParts = fullName.textContent.replace("-", " ").split(" ");
    firstName = nameParts[0] + " " + nameParts[1];
  }
  let media = photographersData.media.filter(
    (m) => m.photographerId === parseInt(photographerId)
  );
  media = media.map((m) => ({ ...m, firstName }));
  return media;
}

async function displayDataMedia(media) {
  const mediasSection = document.querySelector("#content-media");
  if (!media || media.length === 0) {
    console.error("No media data found.");
    return;
  }
  media.forEach((mediaItem) => {
    const mediaCard = mediaCardFactory(mediaItem);
    const userCardMedia = mediaCard.createCard();
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

// INSERT
async function getInsert(photographerId) {
  let dataInsert = photographersData.media.filter(
    (m) => m.photographerId === parseInt(photographerId)
  );

  const allLikes = dataInsert.map((item) => item.likes);
  const sumLikes = allLikes.reduce((acc, curr) => acc + curr);
  const price = photographersData.photographers.find(
    (p) => p.id === parseInt(photographerId)
  ).price;

  let insert = { photographerId, sumLikes, price };

  return insert;
}

async function displayDataInsert(insert) {
  const insertSection = document.querySelector("main");
  if (!insert || insert.length === 0) {
    console.error("No insert data found.");
    return;
  }

  const insertObj = insertFactory(insert);
  const userInsert = insertObj.createInsert();
  insertSection.insertAdjacentHTML("beforeend", userInsert.outerHTML);
}

async function initInsert(id) {
  try {
    const inserts = await getInsert(id);
    displayDataInsert(inserts);
  } catch (error) {
    console.error("Error initializing insert:", error);
  }
}

// LIGHTBOX
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
  closeNav.onclick = () => lightboxObj.closeModaLightbox();

  const leftNav = document.querySelector(".lightbox-nav-left");
  leftNav.onclick = () => lightboxObj.previousMedia();

  const rightNav = document.querySelector(".lightbox-nav-right");
  rightNav.onclick = () => lightboxObj.nextMedia();
}

async function initLightbox(id, initialIndex) {
  try {
    const lightbox = await getLightbox(id);
    displayDataLightbox(lightbox, initialIndex);
  } catch (error) {
    console.error("Error initializing lightbox:", error);
  }
}

async function initialize() {
  try {
    await fetchData();
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    await init(id);
    await initMedia();
    await initInsert(id);
    await initLightbox(id);
  } catch (error) {
    console.error("Error initializing:", error);
  }
}

initialize();

// Dropdown menu
function toggleDropdown() {
  var menu = document.getElementById("dropdownMenu");
  var menuIcon = document.getElementById("dropdownIcon");

  // Toggle l'affichage du menu
  menu.style.display = menu.style.display === "none" ? "block" : "none";

  // Toggle l'icône de l'icone du menu
  menuIcon.classList.toggle("fa-chevron-down");
}
