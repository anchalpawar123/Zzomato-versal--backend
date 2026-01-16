 let imagekitInstance = null;

async function getImageKit() {
    if (!imagekitInstance) {
        const ImageKit = (await import("imagekit")).default;

        imagekitInstance = new ImageKit({
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
        });
    }
    return imagekitInstance;
}

async function uploadFile(file, fileName) {
    const imagekit = await getImageKit();

    const result = await imagekit.upload({
        file: file,
        fileName: fileName
    });

    return result;
}

module.exports = {
    uploadFile
};
