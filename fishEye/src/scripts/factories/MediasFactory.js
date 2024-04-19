class MediasFactory {
  static createMedia(data) {
    if (data.video) {
      return new VideoMedia(data);
    } else if (data.image) {
      return new PictureMedia(data);
    } else {
      throw new Error("Type of media is not recognized");
    }
  }
}
