const express = require("express");
const userRouter = express.Router();
const userController = require("../Controller/userController");

//create user
userRouter.post("/create", userController.create);
module.exports = userRouter;
