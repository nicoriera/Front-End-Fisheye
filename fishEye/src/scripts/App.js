import fetch from "node-fetch";

class App {
  constructor() {
    this.baseUrl = "http://127.0.0.1:8080";
    this.photographersData = [];
    this.mediaData = [];
    this.insertData = [];
    this.lightboxData = [];
    this.photographerApi = new PhotographerApi(this.baseUrl);
  }
  async main() {
    try {
      this.photographersData = await this.getPhotographers();
      this.mediaData = await this.getMedia();
      this.insertData = await this.getInsert();
      this.lightboxData = await this.getLightbox();

      this.displayDataPhotographers(this.photographersData);
      this.displayDataMedia(this.mediaData);
      this.displayDataInsert(this.insertData);
      this.displayDataLightbox(this.lightboxData);
    } catch (error) {
      console.error("Error initializing app:", error);
    }
  }

  async getPhotographers() {
    return fetch(this.baseUrl)
      .then((response) => response.json())
      .catch((error) => console.error("an error occurs", error));
  }

  async getMedia() {
    return fetch(this.baseUrl)
      .then((response) => response.json())
      .catch((error) => console.error("an error occurs", error));
  }

  async getInsert() {
    return fetch(this.baseUrl)
      .then((response) => response.json())
      .catch((error) => console.error("an error occurs", error));
  }

  async getLightbox() {
    return fetch(this.baseUrl)
      .then((response) => response.json())
      .catch((error) => console.error("an error occurs", error));
  }

  displayDataPhotographers(photographers) {
    const photographersSection = document.querySelector(
      ".photographer_section"
    );
    photographers.forEach((photographer) => {
      const photographerModel = photographerTemplate(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
    });
  }

  displayDataMedia(media) {
    const mediaSection = document.querySelector(".media_section");
    media.forEach((media) => {
      const mediaModel = mediaTemplate(media);
      const mediaCardDOM = mediaModel.getMediaCardDOM();
      mediaSection.appendChild(mediaCardDOM);
    });
  }

  displayDataInsert(insert) {
    const insertSection = document.querySelector(".insert_section");
    insert.forEach((insert) => {
      const insertModel = insertTemplate(insert);
      const insertCardDOM = insertModel.getInsertCardDOM();
      insertSection.appendChild(insertCardDOM);
    });
  }

  displayDataLightbox(lightbox) {
    const lightboxSection = document.querySelector(".lightbox_section");
    lightbox.forEach((lightbox) => {
      const lightboxModel = lightboxTemplate(lightbox);
      const lightboxCardDOM = lightboxModel.getLightboxCardDOM();
      lightboxSection.appendChild(lightboxCardDOM);
    });
  }

  // Add a new method to display the data from the lightbox.json file
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

const app = new App();
app.main();

export default App;
