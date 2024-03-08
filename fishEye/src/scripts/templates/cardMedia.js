// Define a base class for MediaCard
function MediaCard(data) {
  this.id = data.id;
  this.title = data.title;
  this.image = data.image;
  this.video = data.video;
  this.name = data.name;
  this.firstName = data.firstName;
  this.likes = data.likes;
}

// Define a method to create the media card
MediaCard.prototype.createCard = function () {
  const picture = `./src/assets/photographers/${this.firstName}/${this.image}`;
  const video = `./src/assets/photographers/${this.firstName}/${this.video}`;

  // Create the card
  const media = document.createElement("div");
  media.classList.add("card-media");
  const link = document.createElement("a");
  link.classList.add("card-media-link");
  let mediaElement;
  if (this.image) {
    mediaElement = document.createElement("img");
    mediaElement.setAttribute("src", picture);
  } else if (this.video) {
    mediaElement = document.createElement("video");
    mediaElement.setAttribute("src", video);
  }
  mediaElement.classList.add("card-media-img");
  mediaElement.setAttribute("alt", this.name);
  mediaElement.setAttribute("aria-label", `Image of photographer ${this.name}`);

  const info = document.createElement("div");
  info.classList.add("card-media-info");
  const title = document.createElement("p");
  title.textContent = this.name;
  title.classList.add("card-media-title");
  title.textContent = this.title;
  const like = document.createElement("div");
  like.classList.add("card-media-like");
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");
  const likes = document.createElement("p");
  likes.textContent = this.likes;
  media.appendChild(link);
  link.appendChild(mediaElement);
  media.appendChild(info);
  info.appendChild(title);
  info.appendChild(like);
  like.appendChild(likes);
  like.appendChild(heart);

  return media;
};
// Define a class for ImageCard

// Define a class for ImageCard
function ImageCard(data) {
  MediaCard.call(this, data);
}

ImageCard.prototype = Object.create(MediaCard.prototype);
ImageCard.prototype.constructor = ImageCard;

// Define a class for VideoCard
function VideoCard(data) {
  MediaCard.call(this, data);
}

VideoCard.prototype = Object.create(MediaCard.prototype);
VideoCard.prototype.constructor = VideoCard;

// Define the factory function
function mediaCardFactory(data) {
  if (data.image) {
    return new ImageCard(data);
  } else if (data.video) {
    return new VideoCard(data);
  } else {
    return new MediaCard(data);
  }
}
