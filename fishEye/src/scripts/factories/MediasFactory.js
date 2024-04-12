class MediasFactory {
  constructor(data, type) {
    if (type === data.image) {
      return new PictureMedia(data);
    } else if (data.video) {
      return new VideoMedia(data);
    } else {
      throw "Type of media is not recognized";
    }
  }
}
