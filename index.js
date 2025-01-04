require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api", require("./routers/post.router"));
app.use("/api", require("./routers/img.router"));

const PORT = process.env.PORT;

const bootstrap = async () => {
  try {
    await mongoose.connect(process.env.DB_URL).then(() => console.log("Connected db"));
    app.listen(PORT, () => console.log(`Server runing http://localhost:${PORT}`));
  } catch (error) {
    console.log(`Error connecting with DB: ${error}`);
  }
};
bootstrap();
