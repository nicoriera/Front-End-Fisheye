async function getPhotographers() {
  const fetchPhotographers = await fetch("./src/data/photographers.json");
  const photographers = await fetchPhotographers.json();
  return photographers;
}
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

async function displayData(photographer) {
  console.log(photographer, "photographer");
  const photographersSection = document.querySelector(".photograph-header");
  console.log(photographersSection, "photographersSection");
  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
  photographersSection.insertAdjacentHTML("afterbegin", userCardDOM.outerHTML);
}

async function init(id) {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers(id);
  console.log(photographers, "photographers");
  const photographer = photographers.find(
    (photographer) => photographer.id == id
  );
  displayData(photographer);
}

init(id);
