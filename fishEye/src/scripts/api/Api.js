class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._baseUrl = url;
  }

  async get() {
    return fetch(this._baseUrl)
      .then((response) => response.json())
      .then((response) => response.data)
      .catch((error) => console.error("an error occurs", error));
  }
}

class PhotographerApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    return await this.get();
  }
}
