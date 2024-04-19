class Insert {
  constructor(data) {
    this._photographerId = data.photographerId;
    this._sumLikes = data.sumLikes;
    this._price = data.price;
    this._likesElement = null;
  }

  get photographerId() {
    return this._photographerId;
  }

  get sumLikes() {
    return this._sumLikes;
  }

  get price() {
    return this._price;
  }

  set sumLikes(value) {
    this._sumLikes = value;
    if (this._likesElement) {
      this._likesElement.textContent = this._sumLikes;
    }
  }

  createInsert() {
    const insert = document.createElement("div");
    insert.classList.add("insert");
    const content = document.createElement("div");
    content.classList.add("insert-content");
    const like = document.createElement("div");
    like.classList.add("insert-like");
    const numberLikes = document.createElement("p");
    numberLikes.textContent = this._sumLikes;
    this._likesElement = document.createElement("p");
    this._likesElement.textContent = this._sumLikes;
    const heart = document.createElement("i");
    heart.classList.add("fas", "fa-heart");
    const priceContent = document.createElement("div");
    priceContent.classList.add("insert-price");
    const price = document.createElement("p");
    price.textContent = `${this._price}€ / jour`;
    priceContent.appendChild(price);
    like.appendChild(numberLikes);
    like.appendChild(heart);
    content.appendChild(like);
    content.appendChild(priceContent);
    insert.appendChild(content);

    return insert;
  }
}

function insertFactory(data) {
  return new Insert(data);
}
