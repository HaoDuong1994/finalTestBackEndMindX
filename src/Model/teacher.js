const mongoose = require("mongoose");
const { Schema } = mongoose;
const teacherSchema = new Schema({
  userId: {
    type: mongoose.ObjectId,
    ref: "users",
  },
  isActive: {
    type: Boolean,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  code: {
    type: String,
    unique: true,
    require: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    default: Date.now,
  },
  teacherPositions: [
    {
      type: mongoose.ObjectId,
      ref: "teacherposition",
    },
  ],
  degrees: [
    {
      type: { type: String },
      school: String,
      major: String,
      year: Number,
      isGraduated: { type: Boolean, default: true },
    },
  ],
});
const Teacher = mongoose.model("teachers", teacherSchema);
module.exports = Teacher;
