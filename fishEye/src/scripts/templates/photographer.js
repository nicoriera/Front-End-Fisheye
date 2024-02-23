function photographerTemplate(data) {
  const { name, portrait, country, city, tagline, price, id } = data;

  const picture = `./src/assets/photographers/Photographers_ID_Photos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.classList.add("photographer-card");
    const link = document.createElement("a");
    link.setAttribute("href", `./photographer.html?id=${id}`);
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.setAttribute("aria-label", `Image of photographer ${name}`);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.classList.add("photographer-name");
    const location = document.createElement("p");
    location.textContent = `${country}, ${city}`;
    location.classList.add("photographer-location");
    const tagLine = document.createElement("p");
    tagLine.textContent = tagline;
    tagLine.classList.add("photographer-tagline");
    const priceElement = document.createElement("p");
    priceElement.textContent = `${price}€/jour`;
    priceElement.classList.add("photographer-price");
    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(location);
    article.appendChild(tagLine);
    article.appendChild(priceElement);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
