const postModel = require("../models/post.model");

class PostService {
  async getAll() {
    const data = await postModel.find();
    return data;
  }
  async post(post) {
    const data = await postModel.create(post);
    return data;
  }
}
module.exports = new PostService();
