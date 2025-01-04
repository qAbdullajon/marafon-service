const { Schema, model } = require("mongoose");

const postModle = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  tarif: { type: String, required: true },
  image: { type: String },
});

module.exports = model("Post", postModle);
