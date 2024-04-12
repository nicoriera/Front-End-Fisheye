class PictureMedia {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.image = data.image;
    this.video = data.video;
    this.name = data.name;
    this.firstName = data.firstName;
    this.likes = data.likes;
    this.date = data.date;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get image() {
    return `./src/assets/photographers/${this._firstName}/${this._image}`;
  }

  get name() {
    return this._name;
  }

  get firstName() {
    return this._firstName;
  }

  get likes() {
    return this._likes;
  }

  get date() {
    return this._date;
  }
}
