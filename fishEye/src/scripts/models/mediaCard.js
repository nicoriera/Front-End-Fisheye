class MediaCard {
  constructor(media, insertManager) {
    this._media = media;
    this._insertManager = insertManager;
  }

  createCard() {
    const media = document.createElement("div");
    media.classList.add("card-media");
    media.setAttribute("tabindex", "0");
    media.setAttribute("aria-label", `View ${this._media.title}`);
    media.setAttribute("data-date", `${this._media.date}`);
    media.setAttribute("data-title", `${this._media.title}`);

    const link = document.createElement("a");
    link.classList.add("card-media-link");
    link.setAttribute("aria-label", `View ${this._media.title}`);
    link.setAttribute("alt", `View ${this._media.title}`);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      displayModalLightbox();
    });

    let mediaElement;
    if (this._media.image) {
      mediaElement = document.createElement("img");
      mediaElement.setAttribute("src", this._media.image);
      mediaElement.setAttribute("alt", `Image de ${this._media.title}`);
      mediaElement.setAttribute("aria-label", `Image de ${this._media.title} `);
    } else if (this._media.video) {
      mediaElement = document.createElement("video");
      mediaElement.setAttribute("src", this._media.video);
      mediaElement.setAttribute("alt", `Vidéo de ${this._media.title}`);
      mediaElement.setAttribute("aria-label", `Vidéo de ${this._media.title} `);
    }
    mediaElement.classList.add("card-media");

    const info = document.createElement("div");
    info.classList.add("card-media-info");
    const title = document.createElement("p");
    title.classList.add("card-media-title");
    title.textContent = this._media.title;
    title.setAttribute("aria-label", `Titre: ${this._media.title}`);

    const like = document.createElement("div");
    like.classList.add("card-media-like");
    const heart = document.createElement("i");
    heart.classList.add("fas", "fa-heart", "like-button");
    heart.setAttribute("aria-label", "likes");
    heart.setAttribute("role", "button");
    heart.setAttribute("alt", "like button");
    const likes = document.createElement("p");
    likes.textContent = this._media.likes;

    const addLike = (e) => {
      e.preventDefault();
      this._media.like();
      likes.textContent = this._media.likes;
      e.target.removeEventListener("click", addLike);
      this._insertManager.updateSumLikes(this._media.likes);
    };

    heart.addEventListener("click", addLike);

    media.appendChild(link);
    link.appendChild(mediaElement);
    media.appendChild(info);
    info.appendChild(title);
    info.appendChild(like);
    like.appendChild(likes);
    like.appendChild(heart);

    return media;
  }
}
