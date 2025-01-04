const { v2: cloudinary } = require("cloudinary");
const postModel = require("../models/post.model");

cloudinary.config({
  cloud_name: "dt1s1hoaj",
  api_key: "654642924451276",
  api_secret: "ZStc91EqCUpgQHxSCw3TeweiolY",
});

const uploadToCloudinary = async (filePath, id) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      public_id: `image_${Date.now()}`,
    });

    const secure_url = uploadResult.secure_url;
    console.log("Yuklangan rasm URL: ", secure_url);

    const findUser = await postModel.findById(id);

    if (!findUser) {
      throw new Error("Post topilmadi");
    }

    findUser.image = secure_url;
    await findUser.save();

    return secure_url;
  } catch (error) {
    console.error("Cloudinary yuklashda xatolik:", error);
    throw new Error("Cloudinary'ga yuklashda xatolik yuz berdi");
  }
};

module.exports = { uploadToCloudinary };
