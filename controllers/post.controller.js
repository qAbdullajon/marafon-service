const postService = require("../service/post.service");

class PostController {
  async getAll(req, res, next) {
    try {
      const workbook = await postService();

      res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      res.setHeader("Content-Disposition", "attachment; filename=users.xlsx");

      await workbook.xlsx.write(res);
      res.end();
    } catch (error) {
      res.status(500).send("Error while generating Excel file.");
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
