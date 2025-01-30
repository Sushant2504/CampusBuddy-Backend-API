const UserModel = require("../models/user.model");

class userService {
  static async registerUser(
    name,
    email,
    password,
    prn,
    department,
    yearofstudy
  ) {
    try {
      const createuser = new UserModel({
        name,
        email,
        password,
        prn,
        department,
        yearofstudy,
      });

      return await createuser.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = userService;
