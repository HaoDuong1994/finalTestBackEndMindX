const express = require("express");
const teacherRouter = express.Router();
const teacherController = require("../Controller/teacherController");
const userController = require("../Controller/userController");

//get list teacher ( câu 1 với câu 2 ở đây)
teacherRouter.get("/", teacherController.getList);

//Create teacher
teacherRouter.post("/create", userController.create, teacherController.create);

module.exports = teacherRouter;
