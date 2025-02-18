const mongoose = require("mongoose");
const { Schema } = mongoose;
const positionSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    unique: true,
  },
  des: String,
  isActive: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAtDate: {
    type: Date,
    default: Date.now,
  },
});
const teacherPosition = mongoose.model(
  "teacherposition",
  positionSchema,
  "teacherposition"
);
module.exports = teacherPosition;
