require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");

// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:5173",
//   })
// );

const app = express();

app.use(cors({ credentials: true, origin: "htts://localhost:5173" }));
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
    await mongoose.connect("mongodb+srv://db_url:VfKH6FFowLPsDQnI@backend.jxus2.mongodb.net/?retryWrites=true&w=majority&appName=Backend").then(() => console.log("Connected db"));
    app.listen(PORT, () => console.log(`Server runing http://localhost:${PORT}`));
  } catch (error) {
    console.log(`Error connecting with DB: ${error}`);
  }
};
bootstrap();
