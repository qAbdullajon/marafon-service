const uploadService = require("../service/img.service");

class FileUploadImage {
  async upload(req, res, next) {
    const { id } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("Fayl yuklanmadi!");
    }

    const fileKey = Object.keys(req.files)[0];
    const file = req.files[fileKey];

    try {
      const secure_url = await uploadService.uploadToCloudinary(file.tempFilePath, id);

      res.status(200).json({
        message: "Fayl muvaffaqiyatli yuklandi",
        url: secure_url,
      });
    } catch (error) {
      res.status(500).json({ message: "Rasm yuklashda xatolik yuz berdi" });
    }
  }
}

module.exports = new FileUploadImage();
