// Define a base class for MediaCard
function Insert(data) {
  this.sumLikes = data.sumLikes;
  this.price = data.price;
}

// Define a method to create the media card
Insert.prototype.createInsert = function () {
  // Create the insert
  const insert = document.createElement("div");
  insert.classList.add("insert");
  const content = document.createElement("div");
  content.classList.add("insert-content");
  const like = document.createElement("div");
  like.classList.add("insert-like");
  const numberLikes = document.createElement("p");
  numberLikes.textContent = this.sumLikes;
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");
  const priceContent = document.createElement("div");
  priceContent.classList.add("insert-price");
  const price = document.createElement("p");
  price.textContent = `${this.price}€ / jour`;
  priceContent.appendChild(price);
  like.appendChild(numberLikes);
  like.appendChild(heart);
  content.appendChild(like);
  content.appendChild(priceContent);
  insert.appendChild(content);

  return insert;
};

function insertFactory(data) {
  return new Insert(data);
}
