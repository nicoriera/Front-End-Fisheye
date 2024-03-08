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
  console.log(insert, "insert");

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

async function initInsert() {
  try {
    const inserts = await getInsert(id);
    displayDataInsert(inserts);
  } catch (error) {
    console.error("Error initializing insert:", error);
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
