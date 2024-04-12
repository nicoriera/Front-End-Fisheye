class MediasFactory {
  constructor(data, type) {
    if (type === data.image) {
      return new PictureMediaCard(data);
    } else if (data.video) {
      return new VideoMediaCard(data);
    } else {
      throw "Type of media is not recognized";
    }
  }
}

function mediasFactory(data, type) {
  return new MediasFactory(data, type);
}
