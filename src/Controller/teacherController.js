const Teacher = require("../Model/teacher");
const TeacherPosition = require("../Model/teacherPosition");
const teacherController = {
  getList: async (req, res) => {
    try {
      //Câu 2
      if (req.query.page) {
        const { page, limit } = req.query;
        let offset = (page - 1) * limit;
        const data = await Teacher.find({}).limit(limit).skip(offset).exec();
        res.status(200).json({
          message: " get data ok",
          page: page,
          limit: limit,
          data,
        });
      } else {
        //Câu 1
        const data = await Teacher.find()
          .populate("userId")
          .populate("teacherPositions");
        res.status(200).json({
          message: "get list teacher ok",
          data,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
  // CÂU 3
  create: async (req, res) => {
    let isTeacherCodeExist;
    let randomDigits;
    try {
      do {
        randomDigits = Math.floor(1000000000 + Math.random() * 9000000000);
        isTeacherCodeExist = await Teacher.findOne({ code: randomDigits });
      } while (isTeacherCodeExist);
      //Find position
      const position = await TeacherPosition.findOne({
        code: req.body.positionCode,
      });
      if (position == null) throw new Error("cant found position");

      //CREATE TEACHER
      const objectDC = {
        type: req.body.typeDC,
        shool: req.body.schoolDC,
        major: req.body.majorDC,
        year: Number(req.body.yearDC),
      };
      const newTeacher = await Teacher.create({
        code: randomDigits,
        userId: req.body.userId,
        teacherPositions: [position._id],
        degrees: [objectDC],
      });
      await newTeacher.save();
      res.status(200).json({
        message: "create teacher sucess",
        data: newTeacher,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
module.exports = teacherController;
