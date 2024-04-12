class VideoMediaCard {
  constructor(data) {
    this.firstName = data.firstName;
    this.video = data.video;
    this.title = data.title;
    this.date = data.date;
    this.likes = data.likes;
  }

  createCard() {
    const picture = `./src/assets/photographers/${this.firstName}/${this.video}`;

    const media = document.createElement("div");
    media.classList.add("card-media");
    media.setAttribute("tabindex", "0");
    media.setAttribute("aria-label", `View ${this.title}`);
    media.setAttribute("data-date", `${this.date}`);
    media.setAttribute("data-title", `${this.title}`);
    const link = document.createElement("a");
    link.classList.add("card-media-link");
    link.setAttribute("aria-label", `View ${this.title}`);
    link.addEventListener("click", (e) => {
      e.preventDefault();
      displayModalLightbox();
    });

    const mediaElement = document.createElement("video");
    mediaElement.setAttribute("src", video);
    mediaElement.classList.add("card-media-video");
    mediaElement.setAttribute("alt", this.name);
    mediaElement.setAttribute(
      "aria-label",
      `Image of photographer ${this.name}`
    );

    const info = document.createElement("div");
    info.classList.add("card-media-info");
    const title = document.createElement("p");
    title.classList.add("card-media-title");
    title.textContent = this.title;
    const like = document.createElement("div");
    like.classList.add("card-media-like");
    const heart = document.createElement("i");
    heart.classList.add("fas", "fa-heart", "like-button");
    heart.setAttribute("aria-label", "likes");
    const likes = document.createElement("p");
    likes.textContent = this.likes;

    const addLike = (e) => {
      e.preventDefault();
      this.likes++;
      likes.textContent = this.likes;
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
