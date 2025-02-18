const TeacherPosition = require("../Model/teacherPosition");
const teacherPosition = {
  getList: async (req, res) => {
    try {
      const data = await TeacherPosition.find({});
      res.status(200).json({
        message: "Get list sucess",
        data,
      });
    } catch (error) {
      res.status(400).json({
        message: "Get list Fail",
        error: error.message,
      });
    }
  },
  create: async (req, res) => {
    try {
      const { code, des, name } = req.body;
      const codeIsExist = await TeacherPosition.findOne({ code });
      if (codeIsExist) throw new Error("Code position already exist");
      const newPosition = await TeacherPosition.create({ code, des, name });
      res.status(200).json({
        message: "Create posotion sucess",
        data: newPosition,
      });
    } catch (error) {
      res.status(201).json({
        message: error.message,
      });
    }
  },
};
module.exports = teacherPosition;
