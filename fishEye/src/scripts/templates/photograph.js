function photographerTemplate(data) {
  const { name, portrait, country, city, tagline, price, id } = data;

  const picture = `./src/assets/photographers/Photographers_ID_Photos/${portrait}`;

  function getUserCardDOM() {
    // Create the header
    const article = document.createElement("article");
    article.classList.add("photographer-profile");
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.classList.add("photographer-name");
    const info = document.createElement("div");
    info.classList.add("photographer-info");
    const location = document.createElement("h3");
    location.textContent = `${country}, ${city}`;
    location.classList.add("photographer-location");
    const tagLine = document.createElement("p");
    tagLine.textContent = tagline;
    tagLine.classList.add("photographer-tagline");
    const img = document.createElement("img");
    img.classList.add("photographer-portrait");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.setAttribute("aria-label", `Image of photographer ${name}`);
    article.appendChild(h2);
    article.appendChild(info);
    info.appendChild(location);
    info.appendChild(tagLine);
    const contactButton = document.querySelector(".contact_button");
    contactButton.insertAdjacentElement("afterend", img);

    return article;
  }

  return { name, picture, getUserCardDOM };
}
