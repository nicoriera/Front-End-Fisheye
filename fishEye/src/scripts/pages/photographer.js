let photographersData = null;

// Fetch data from photographers.json file
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

// Initialize photographer's data
async function initialize() {
  try {
    await fetchData();
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    await init(id); // Initialize photographer's data
    await initMedia(); // Initialize photographer's media
    await initInsert(id); // Initialize photographer's insertions
    await initLightbox(id); // Initialize photographer's lightbox
    await initContactForm(id); // Initialize photographer's contact form
    await initDropdown(id); // Initialize photographer's media sorting dropdown
  } catch (error) {
    console.error("Error initializing:", error);
  }
}

initialize();
