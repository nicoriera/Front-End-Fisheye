class VideoMedia {
  constructor(data) {
    this._id = data.id;
    this._title = data.title;
    this._video = data.video;
    this._name = data.name;
    this._firstName = data.firstName;
    this._likes = data.likes;
    this._date = data.date;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get video() {
    return `./src/assets/photographers/${this._firstName}/${this._video}`;
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
