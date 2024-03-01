function mediaCardTemplate(data) {
  const { name, portrait, country, city, tagline, price, id } = data;

  const picture = `./src/assets/photographers/Photographers_ID_Photos/${portrait}`;

  function getUserCardMedia() {
    // Create the header
    const media = document.createElement("div");
    media.classList.add("card-media");
    const link = document.createElement("a");
    link.classList.add("card-media-link");
    const img = document.createElement("img");
    img.classList.add("card-media-img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.setAttribute("aria-label", `Image of photographer ${name}`);
    const info = document.createElement("div");
    info.classList.add("card-media-info");
    const title = document.createElement("p");
    title.textContent = name;
    title.classList.add("card-media-title");
    const like = document.createElement("div");
    like.classList.add("card-media-like");
    const heart = document.createElement("i");
    heart.classList.add("fas", "fa-heart");
    const likes = document.createElement("p");
    likes.textContent = "12";
    media.appendChild(link);
    link.appendChild(img);
    media.appendChild(info);
    info.appendChild(title);
    info.appendChild(like);
    like.appendChild(likes);
    like.appendChild(heart);

    return media;
  }
  return { name, picture, getUserCardMedia };
}
