class ModalLightbox {
  constructor(data) {
    this._media = [...data.images, ...data.videos].map((item) => ({
      src: `./src/assets/photographers/${data.firstName}/${
        item.image || item.video
      }`,
      title: item.title,
      type: item.image ? "img" : "video",
    }));

    this._currentMediaIndex = 0;
  }

  previousMedia() {
    this._currentMediaIndex =
      (this._currentMediaIndex - 1 + this._media.length) % this._media.length;
    this.displayMedia(this._currentMediaIndex);
  }

  nextMedia() {
    this._currentMediaIndex =
      (this._currentMediaIndex + 1) % this._media.length;
    this.displayMedia(this._currentMediaIndex);
  }

  createMediaElement(media) {
    const mediaElement = document.createElement(media.type);
    mediaElement.setAttribute("src", media.src);

    const title = document.createElement("p");
    title.classList.add("lightbox-title");
    title.textContent = media.title;

    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("lightbox-media-container");
    mediaContainer.appendChild(mediaElement);
    mediaContainer.appendChild(title);

    return mediaContainer;
  }

  createLightbox() {
    const content = document.createElement("div");
    content.classList.add("lightbox-content");

    const leftNav = this.createNavButton(
      "lightbox-nav-left",
      "M61.6399 66.36L43.3199 48L61.6399 29.64L55.9999 24L31.9999 48L55.9999 72L61.6399 66.36Z"
    );

    const rightNavContent = document.createElement("div");
    rightNavContent.classList.add("lightbox-nav-right-content");

    const rightNav = this.createNavButton(
      "lightbox-nav-right",
      "M34.3601 29.64L52.6801 48L34.3601 66.36L40.0001 72L64.0001 48L40.0001 24L34.3601 29.64Z"
    );

    const closeNav = this.createCloseButton();

    rightNavContent.appendChild(closeNav, rightNav);

    const media = document.createElement("div");
    media.classList.add("lightbox-media");
    this._media.forEach((item) => {
      const mediaContainer = this.createMediaElement(item);
      media.appendChild(mediaContainer);
    });

    content.append(leftNav, media, rightNav, rightNavContent);

    return content;
  }

  createNavButton(className, pathData) {
    const nav = document.createElement("button");
    nav.classList.add(className);
    nav.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
      <path d="${pathData}" fill="#911C1C"/>
    </svg>`;
    nav.onclick = className === "lightbox-nav-left" ? previousMedia : nextMedia;
    return nav;
  }

  createCloseButton() {
    const closeNav = document.createElement("button");
    closeNav.classList.add("lightbox-nav-close");
    closeNav.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
      <g clip-path="url(#clip0_120_794)">
        <path d="M57 19.23L52.77 15L36 31.77L19.23 15L15 19.23L31.77 36L15 52.77L19.23 57L36 40.23L52.77 57L57 52.77L40.23 36L57 19.23Z" fill="#911C1C"/>
      </g>
      <defs>
        <clipPath id="clip0_120_794">
          <rect width="72" height="72" fill="white" />
        </clipPath>
      </defs>
    </svg>`;
    closeNav.onclick = closeModaLightbox;
    return closeNav;
  }
}

function lightboxFactory(data) {
  return new ModalLightbox(data);
}
