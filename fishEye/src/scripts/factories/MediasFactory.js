class MediasFactory {
  constructor(data, type) {
    if (type === data.image) {
      return new ImageCard(data);
    } else if (data.video) {
      return new VideoCard(data);
    } else {
      throw "Type of media is not recognized";
    }
  }
}
