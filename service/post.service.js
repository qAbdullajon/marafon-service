const postModel = require("../models/post.model");
const express = require("express");

class PostService {
  async getAll() {
    // MongoDB'dan ma'lumotlarni olish
    const users = await postModel.find();

    // Excel fayl yaratish
    const workbook = new express.Workbook();
    const worksheet = workbook.addWorksheet("Users");

    // Sarlavhalar qo'shish
    worksheet.columns = [
      { header: "ID", key: "_id", width: 30 },
      { header: "Name", key: "name", width: 20 },
      { header: "Email", key: "email", width: 30 },
    ];

    // Ma'lumotlarni joylash
    users.forEach((user) => {
      worksheet.addRow(user);
    });

    return workbook; // Excel fayl obyektini qaytarish
  }
  async post(post) {
    const data = await postModel.create(post);
    return data;
  }
}
module.exports = new PostService();
