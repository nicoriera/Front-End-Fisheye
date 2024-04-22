async function getMedia(photographerId) {
  const fullName = document.querySelector(".photographer-name");
  const namePart = fullName.textContent.split(" ");

  let firstName = namePart[0];
  if (firstName.includes("-")) {
    let nameParts = fullName.textContent.replace("-", " ").split(" ");
    firstName = nameParts[0] + " " + nameParts[1];
  }
  let media = photographersData.media.filter(
    (m) => m.photographerId === parseInt(photographerId)
  );

  media = media.map((m) => ({ ...m, firstName }));
  return media;
}

async function displayDataMedia(media) {
  const mediasSection = document.querySelector("#content-media");

  if (!mediasSection) {
    console.error("Medias section not found.");
    return;
  }

  if (!media || media.length === 0) {
    console.error("No media data found.");
    return;
  }

  const mediaCards = []; // Tableau pour stocker les cartes de média

  media.forEach((mediaItem, index) => {
    const mediaInstance = MediasFactory.createMedia(mediaItem);
    const mediaCard = new MediaCard(mediaInstance);
    const userCardMedia = mediaCard.createCard();
    mediasSection.appendChild(userCardMedia);
    mediaCards.push(userCardMedia); // Ajouter la carte à notre tableau

    const likeButton = userCardMedia.querySelector(".like-button");
    if (likeButton) {
      likeButton.addEventListener("click", async function () {
        const insert = await getInsert(mediaCard.photographerId);
        if (insert) {
          insert.sumLikes += 1;
          displayDataInsert(insert);
        } else {
          console.error("No insert data found.");
        }
      });
    }

    userCardMedia.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const nextMedia = mediaCards[index + 1]; // Utiliser le tableau pour obtenir la carte suivante
        if (nextMedia) {
          nextMedia.focus();
        } else {
          mediaCards[0].focus(); // Retourner à la première carte si la dernière est atteinte
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        displayModalLightbox(index);
      }
    });
  });
}

async function initMedia() {
  try {
    const medias = await getMedia(id);
    displayDataMedia(medias);
  } catch (error) {
    console.error("Error initializing media:", error);
  }
}
