class App {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/photographers";
    this.photographersData = [];
    this.mediaData = [];
    this.insertData = [];
  }
  async main() {
    try {
      this.photographersData = await this.getPhotographers();
      this.mediaData = await this.getMedia();
      this.insertData = await this.getInsert();
      this.displayDataPhotographers(this.photographersData);
      this.displayDataMedia(this.mediaData);
      this.displayDataInsert(this.insertData);
    } catch (error) {
      console.error("Error initializing app:", error);
    }
  }

  async getPhotographers() {
    return fetch(this.baseUrl)
      .then((response) => response.json())
      .catch((error) => console.error("an error occurs", error));
  }
}

const app = new App();
app.main();
