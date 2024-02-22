function photographerTemplate(data) {
  const { name, portrait, country, city, tagline, price } = data;

  const picture = `./src/assets/photographers/Photographers_ID_Photos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const location = document.createElement("p");
    location.textContent = `${country}, ${city}`;
    const tagLine = document.createElement("p");
    tagLine.textContent = tagline;
    const priceElement = document.createElement("p");
    priceElement.textContent = `${price}€/jour`;
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(location);
    article.appendChild(tagLine);
    article.appendChild(priceElement);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
