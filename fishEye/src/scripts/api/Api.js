class Api {
  /**
   *
   * @param {string} url
   */

  async get() {
    return fetch(this._baseUrl)
      .then((response) => response.json())
      .catch((error) => console.error("an error occurs", error));
  }
}
