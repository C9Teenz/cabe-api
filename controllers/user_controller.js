const { User } = require("../models");
const jwt = require("jsonwebtoken");
class UserController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;
      let findUser = await User.findOne({ where: { username } });
      if (!findUser) {
        const createUser = await User.create({
          username: username,
          password: password,
        });
        res.status(200).json(createUser);
      } else {
        res.status(400).json({ message: "Username already exist" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username, password } });
      if (!user) {
        return res.status(400).json({
          status: false,
          data: {},
          error: "User Not Found",
        });
      }
      //to create token
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

      return res.status(200).json({
        status: true,
        data: {
          token,
        },
        error: "",
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  static async me(req, res) {
    const token = req.headers["authorization"].split(" ")[1];
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      if (user) {
        const dataUser = await User.findByPk(user.id);
        console.log(user.id);
        res.status(200).send({
          status: true,
          message: "get user detail success",
          data: {
            name: dataUser.username,
          },
        });
      } else {
        res.status(400).send({ status: false, message: "Token not valid" });
      }
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "Server error",
        data: error.stack,
      });
    }
  }
}
module.exports = UserController;
