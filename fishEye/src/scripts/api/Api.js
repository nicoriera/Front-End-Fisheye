class Api {
  /**
   *
   * @param {string} url
   */

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async get() {
    return fetch(this.baseUrl)
      .then((response) => response.json())
      .catch((error) => console.error("an error occurs", error));
  }
}
