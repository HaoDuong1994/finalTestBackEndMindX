const express = require("express");
const teacherPositionRouter = express.Router();
const teachPositionController = require("../Controller/teacherPositionController");
//Câu 1.4
teacherPositionRouter.get("/", teachPositionController.getList);

//Câu 1.5
teacherPositionRouter.post("/create", teachPositionController.create);
module.exports = teacherPositionRouter;
