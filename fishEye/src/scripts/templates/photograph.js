function photographerTemplate(data) {
  const { name, portrait, country, city, tagline } = data;

  const picture = `./src/assets/photographers/Photographers_ID_Photos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.classList.add("photographer-profile");

    const heading = document.createElement("h1");
    heading.textContent = name;
    heading.classList.add("photographer-name");

    const infoSection = document.createElement("div");
    infoSection.classList.add("photographer-info");

    const location = document.createElement("h2");
    location.textContent = `${country}, ${city}`;
    location.classList.add("photographer-location");

    const tagLine = document.createElement("p");
    tagLine.textContent = tagline;
    tagLine.classList.add("photographer-tagline");

    const image = document.createElement("img");
    image.classList.add("photographer-portrait");
    image.src = picture;
    image.alt = `Portrait de ${name}`;
    image.setAttribute("aria-label", `Image of photographer ${name}`);

    article.appendChild(heading);
    article.appendChild(infoSection);
    infoSection.appendChild(location);
    infoSection.appendChild(tagLine);

    const contactButton = document.querySelector(".contact_button");
    contactButton.insertAdjacentElement("afterend", image);

    return article;
  }

  return { name, picture, getUserCardDOM };
}
