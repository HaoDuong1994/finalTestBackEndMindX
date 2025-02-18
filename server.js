const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const teacherRouter = require("./src/Router/teacherRouter");
const teachPositionRouter = require("./src/Router/teacherpositionRouter");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();
app.use(cors());
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://webfullstack:webfullstack@cluster0.pdqogtf.mongodb.net/finalTest"
  )
  .then(() => {
    console.log("kết nối ok");
  });

//Teacher API ( Câu 1.1, 1.2, 1.3)
app.use("/api/teacher", teacherRouter);

//Teacher Position API( câu 1.4, 1.5 )
app.use("/api/teacher-position", teachPositionRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`, process.env.PORT);
});
