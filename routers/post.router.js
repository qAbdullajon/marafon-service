const express = require("express");
const postController = require("../controllers/post.controller");

const router = express.Router();

router.get("/get-post", postController.getAll);
router.post("/post", postController.post);

module.exports = router;
