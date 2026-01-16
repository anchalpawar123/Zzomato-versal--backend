 let imagekit;

async function getImageKit() {
  if (!imagekit) {
    const ImageKit = (await import("imagekit")).default;

    imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
    });
  }
  return imagekit;
}

async function uploadFile(file, fileName) {
  const ik = await getImageKit();

  const result = await ik.upload({
    file: file,
    fileName: fileName
  });

  return result;
}

module.exports = {
  uploadFile
};
