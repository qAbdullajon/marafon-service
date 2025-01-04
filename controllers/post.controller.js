const postService = require("../service/post.service");

class PostController {
  async getAll(req, res, next) {
    try {
      const data = await postService.getAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
  async post(req, res, next) {
    try {
      const data = await postService.post(req.body);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new PostController();
