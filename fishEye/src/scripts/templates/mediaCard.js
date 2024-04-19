class MediaCard {
  constructor(media) {
    this._media = media;
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
    link.addEventListener("click", (e) => {
      e.preventDefault();
      displayModalLightbox();
    });

    let mediaElement;
    if (this._media.image) {
      mediaElement = document.createElement("img");
      mediaElement.setAttribute("src", this._media.image);
    } else if (this._media.video) {
      mediaElement = document.createElement("video");
      mediaElement.setAttribute("src", this._media.video);
    }
    mediaElement.classList.add("card-media-img");
    mediaElement.setAttribute("alt", this._media.name);
    mediaElement.setAttribute(
      "aria-label",
      `Image of photographer ${this._media.name}`
    );

    const info = document.createElement("div");
    info.classList.add("card-media-info");
    const title = document.createElement("p");
    title.classList.add("card-media-title");
    title.textContent = this._media.title;
    const like = document.createElement("div");
    like.classList.add("card-media-like");
    const heart = document.createElement("i");
    heart.classList.add("fas", "fa-heart", "like-button");
    heart.setAttribute("aria-label", "likes");
    const likes = document.createElement("p");
    likes.textContent = this._media.likes;

    const addLike = (e) => {
      e.preventDefault();
      this.likes++;
      likes.textContent = this._media.likes;
      e.target.removeEventListener("click", addLike);
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
