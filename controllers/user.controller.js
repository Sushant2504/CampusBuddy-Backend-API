
const UserService = require("../services/user.services");


exports.register = async(req,res,next) => {
     try{
         
        const {name, email, password, prn, department, yearofstudy} = req.body;


        const successRes = await UserService.registerUser(name, email, password, prn, department, yearofstudy);
        
        res.json({status: true, success: "User Registered Successfully"});

     } catch(error) 
     {
         throw error;
     }
};


exports.login = async(req,res,next) => {
    try{
        
       const {email, password} = req.body;

       const user = await UserServices.checkUser(email);

       console.log("--------------user-------------", user);

       if(!user) {
          throw new Error("User not found");
       }

       const isMatch = await user.comparePassword(password);

       if(isMatch === false) {
           throw new Error("Password Invalid");
       }

       let tokenData = {_id: user._id, email: user.email}

       const token = await UserService.generateToken(tokenData, "secreatKey", 'jwt_expire');


       
       res.status(200).json({status: true, success: "User Login Successfully"});

    } catch(error) 
    {
        throw error;
    }
};