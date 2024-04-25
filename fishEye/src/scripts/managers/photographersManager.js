// Function to asynchronously fetch photographers' data from a JSON file
async function getPhotographers() {
  const photographers = photographersData.photographers;
  return photographers;
}

// Function to display photographers' data on the webpage
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Function to initialize the application
async function init() {
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
