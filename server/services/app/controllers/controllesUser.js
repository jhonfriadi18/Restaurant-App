const { createToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");
// const { User } = require("../models/");

class Controller {
  static async register(req, res, next) {
    try {
      let { username, email, password, phoneNumber, address } = req.body;
      let user = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });
      console.log({ id : user.id, email: user.email});
      res.status(201).json({ id : user.id, email: user.email});
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email || !password) {
        throw { name: "BadRequest" };
      }

      let user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "InvalidCredentials" };
      }

      let compare = comparePassword(password, user.password);
      if (!compare) {
        throw { name: "InvalidCredentials" };
      }
      let payload = {
        id: user.id,
      };

      let access_token = createToken(payload);
      res
        .status(200)
        .json({ access_token, email: user.email, role: user.role });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;