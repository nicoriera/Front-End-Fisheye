// Function to generate HTML markup for a photographer's user card
function photographerTemplate(data) {
  const { name, portrait, country, city, tagline, price, id } = data;

  const pictureSrc = `./src/assets/photographers/Photographers_ID_Photos/${portrait}`;

  function getUserCardDOM() {
    const card = document.createElement("article");
    card.classList.add("photographer-card");

    const link = document.createElement("a");
    link.href = `./photographer.html?id=${id}`;

    const image = document.createElement("img");
    image.classList.add("photographer-portrait");
    image.src = pictureSrc;
    image.alt = `Portrait de ${name}`;
    image.setAttribute("aria-label", `Portrait du photographe ${name}`);

    const heading = document.createElement("h2");
    heading.textContent = name;
    heading.classList.add("photographer-name");

    const location = document.createElement("p");
    location.textContent = `${country}, ${city}`;
    location.classList.add("photographer-location");

    const tagLine = document.createElement("p");
    tagLine.textContent = tagline;
    tagLine.classList.add("photographer-tagline");

    const priceElement = document.createElement("p");
    priceElement.textContent = `${price}€/jour`;
    priceElement.classList.add("photographer-price");

    // Append elements to construct the photographer's user card
    card.appendChild(link);
    link.appendChild(image);
    link.appendChild(heading);
    card.appendChild(location);
    card.appendChild(tagLine);
    card.appendChild(priceElement);

    return card;
  }

  return { name, pictureSrc, getUserCardDOM };
}
