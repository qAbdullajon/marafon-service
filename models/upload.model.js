const mongoose = require("mongoose");

// Rasm URL'sini saqlash uchun model
const uploadSchema = new mongoose.Schema({
  secure_url: {
    type: String,
    required: true,
  },
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
