class ModalLightbox extends Modal {
  constructor(data) {
    this._lightbox = lightbox;
  }

  createModalLightbox() {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("lightbox-modal");

    const modalLightbox = `
        <div class="lightbox-content">
          <button class="lightbox-nav-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
            >
              <path
                d="M61.6399 66.36L43.3199 48L61.6399 29.64L55.9999 24L31.9999 48L55.9999 72L61.6399 66.36Z"
                fill="#911C1C"
              />
            </svg>
          </button>
          <div class="lightbox-media">
            <img
              src="${this._lightbox.media}"
            />
            <p>${this._lightbox.title}</p>
          </div>
          <div class="lightbox-nav-right-content">
            <button class="lightbox-nav-close" onclick="closeModaLightbox()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
              >
                <g clip-path="url(#clip0_120_794)">
                  <path
                    d="M57 19.23L52.77 15L36 31.77L19.23 15L15 19.23L31.77 36L15 52.77L19.23 57L36 40.23L52.77 57L57 52.77L40.23 36L57 19.23Z"
                    fill="#911C1C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_120_794">
                    <rect width="72" height="72" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button class="lightbox-nav-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
              >
                <path
                  d="M34.3601 29.64L52.6801 48L34.3601 66.36L40.0001 72L64.0001 48L40.0001 24L34.3601 29.64Z"
                  fill="#911C1C"
                />
              </svg>
            </button>
          </div>
        </div>
     `;
    $wrapper.innerHTML = modalLightbox;
    console.log($wrapper, "wrapper");
    return $wrapper;
  }
}
