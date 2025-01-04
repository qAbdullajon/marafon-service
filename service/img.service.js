const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: "dt1s1hoaj",
  api_key: "654642924451276",
  api_secret: "ZStc91EqCUpgQHxSCw3TeweiolY",
});

const uploadToCloudinary = async (filePath) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      public_id: `image_${Date.now()}`,
    });

    return uploadResult.secure_url;
  } catch (error) {
    console.error("Cloudinary yuklashda xatolik:", error);
    throw new Error("Cloudinary'ga yuklashda xatolik yuz berdi");
  }
};

module.exports = { uploadToCloudinary };
