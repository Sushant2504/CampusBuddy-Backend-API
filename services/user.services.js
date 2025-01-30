const UserModel = require("../models/user.model");
const jwt = require('jsonwebtoken');

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

  static async chackUser(email) {
      try{
          return await UserModel({email});

      } catch (error) {
          throw error;
      }
  }


  static async generateToken(tokenData, secreatKey, jwtexpire) {
      return jwt.sign(tokenData, secreatKey, {expresIn:jwt_expire});
  }


}

module.exports = userService;
