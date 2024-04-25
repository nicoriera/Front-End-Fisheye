let insertsData = new Map();

async function getInsert(photographerId) {
  photographerId = parseInt(photographerId);

  if (insertsData.has(photographerId)) {
    return insertsData.get(photographerId);
  }

  let dataInsert = photographersData.media.filter(
    (m) => m.photographerId === photographerId
  );

  const allLikes = dataInsert.map((item) => item.likes);
  const sumLikes = allLikes.reduce((acc, curr) => acc + curr, 0);

  const photographer = photographersData.photographers.find(
    (p) => p.id === photographerId
  );

  const price = photographer.price;

  let insert = { photographerId, sumLikes, price };

  insertsData.set(photographerId, insert);

  await updateSumLikes(sumLikes);

  return insert;
}

async function updateSumLikes(sumLikes) {
  // Mettre à jour l'affichage du total des likes
  const sumLikesElement = document.querySelector(".insert-like p");
  if (sumLikesElement) {
    sumLikesElement.textContent = sumLikes;
  }
}

async function displayDataInsert(insert) {
  const insertSection = document.querySelector("main");
  if (!insert || insert.length === 0) {
    console.error("No insert data found.");
    return;
  }

  const insertObj = insertFactory(insert);
  const userInsert = insertObj.createInsert();
  insertSection.insertAdjacentHTML("beforeend", userInsert.outerHTML);
}

async function initInsert(id) {
  try {
    const inserts = await getInsert(id);
    displayDataInsert(inserts);
  } catch (error) {
    console.error("Error initializing insert:", error);
  }
}
