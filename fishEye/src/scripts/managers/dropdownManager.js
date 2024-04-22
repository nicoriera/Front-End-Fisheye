async function getDropdown(photographerId) {
  const dropdown = photographersData.photographers.find(
    (p) => p.id === parseInt(photographerId)
  );

  return { dropdown };
}

async function sortAndDisplayMedia(sortType) {
  const mediaContainer = document.querySelector("#content-media");
  if (!mediaContainer) {
    console.error("Media container not found.");
    return;
  }

  const mediaCards = Array.from(mediaContainer.querySelectorAll(".card-media"));

  mediaCards.sort((a, b) => {
    const aValue = a.getAttribute(`data-${sortType}`);
    const bValue = b.getAttribute(`data-${sortType}`);

    if (sortType === "date") {
      return new Date(bValue) - new Date(aValue);
    } else if (sortType === "title") {
      return aValue.localeCompare(bValue);
    }
  });

  mediaContainer.innerHTML = "";

  mediaCards.forEach((mediaCard) => {
    mediaContainer.appendChild(mediaCard);
  });
}

async function displayDataDropdown(dropdown) {
  const dropdownSection = document.querySelector("#photograph-filter");
  if (!dropdown) {
    console.error("No dropdown data found.");
    return;
  }

  const dropdownObj = dropdownFilterFactory(dropdown);
  const userDropdown = dropdownObj.createDropdownFilter();
  dropdownSection.appendChild(userDropdown);
}

async function initDropdown(id) {
  try {
    const { dropdown, media } = await getDropdown(id);
    displayDataDropdown(dropdown);
    const dropdownElement = document.querySelector("#photograph-filter button");
    dropdownElement.addEventListener("change", () => {
      const sortType = dropdownElement.value;
      sortAndDisplayMedia(sortType);
    });
  } catch (error) {
    console.error("Error initializing dropdown:", error);
  }
}
