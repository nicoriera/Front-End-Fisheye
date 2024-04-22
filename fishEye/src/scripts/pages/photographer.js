let photographersData = null;

async function fetchData() {
  try {
    const response = await fetch("./src/data/photographers.json");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    photographersData = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// INITIALIZE PAGE
async function initialize() {
  try {
    await fetchData();
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    await init(id); // Initialiser les données du photographe
    await initMedia(); // Initialiser les médias du photographe
    await initInsert(id); // Initialiser les insertions du photographe
    await initLightbox(id); // Initialiser la lightbox du photographe
    await initContactForm(id); // Initialiser le formulaire de contact du photographe
    await initDropdown(id); // Initialiser la dropdown de tri des médias du photographe
  } catch (error) {
    console.error("Error initializing:", error);
  }
}

initialize();

function toggleDropdown() {
  var menu = document.getElementById("dropdownMenu");
  var menuIcon = document.getElementById("dropdownIcon");

  menu.style.display = menu.style.display === "none" ? "block" : "none";
  menuIcon.classList.toggle("fa-chevron-down");
  menuIcon.classList.add("fa-chevron-up");
}
