
const UserService = require("../services/user.services");


exports.register = async(req,res,next) => {
     try{
         
        const {name, email, password, prn, department, yearofstudy} = req.body;


        const successRes = await UserService.registerUser(name, email, password, department, yearofstudy);
        
        res.json({status: true, success: "User Registered Successfully"});

     } catch(error) 
     {
         throw error;
     }
};