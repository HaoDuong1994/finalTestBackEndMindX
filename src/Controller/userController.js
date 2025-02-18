const jwt = require("jsonwebtoken");
const User = require("../Model/users");
const usersController = {
  create: async (req, res, next) => {
    try {
      const { role, name, email, phoneNumber, address, identity, dob } =
        req.body;
      if (role === "TEACHER") {
        const newDateOfBird = new Date(dob);
        const data = await User.create({
          role,
          name,
          email,
          phoneNumber,
          address,
          identity,
          dob: newDateOfBird,
        });
        const userId = data._id;
        req.body.userId = userId;
        next();
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
module.exports = usersController;
