const mongoose = require("mongoose");
const db = require("../config/db");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;



const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true },
  prn: { type: Number, required: true, unique: true },
  department: { type: String, required: true },
  yearofstudy: { type: Number, required: true },
});


userSchema.pre('save', async function(){
   
    try {
         var user = this;
         const salt = await (bcrypt.genSalt(10));
         const hashpass = await bcrypt.hash(user.password, salt);
 
         user.password = hashpass;
        
    } catch(error) {
         throw error;
    }
     
});


userSchema.methods.comparePassword = async function(userPassword) {

  try {
     const isMatch = await bcrypt.compare(userPassword, this.password)
     return isMatch;
  } catch(error) {
      throw error;
  }
}


const UserModel = db.model('user', userSchema);



module.exports = UserModel;
