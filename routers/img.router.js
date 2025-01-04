const express = require("express");
const fileUploadImage = require("../controllers/img.controller");

const router = express.Router();
router.post("/upload", fileUploadImage.upload);

module.exports = router;
