// Variable to store photographers' data
let photographersData = null;

// Function to fetch photographers' data asynchronously
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

// Function to initialize the page
async function initialize() {
  try {
    await fetchData();
    await init();
  } catch (error) {
    console.error("Error initializing:", error);
  }
}

initialize();
