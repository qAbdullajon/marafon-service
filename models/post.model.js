const { Schema, model } = require("mongoose");

const postModle = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  tarif: { type: String, required: true },
});

module.exports = model("Post", postModle);
