import {validationResult} from "express-validator";
import User from "../Model/user.model.js";
import bcrypt from "bcryptjs";

export const signIn = async (request,response,next)=>{
    let{email,password} = request.body;
    let user = await User.findOne({where:{email},raw : true});
    if(user){
        let dbpassword = user.password;
        let status = bcrypt.compareSync(password,dbpassword);
        return status ? response.status(200).json({message:"Sign-in Successful",user}): response.status(401).json({error:"Unauthorized Access"});
    }
    
}
export const signUp = async (request,response,next)=>{
    try{
      const errors =  validationResult(request);
      if(!err.isEmpty())
        return response.status(401).json({error: errors.array()});
     
      let {password} = request.body;
      let saltKey = bcrypt.genSaltSync(10);
      password = bcrypt.hashSync(password,saltKey);
      request.body.password = password;
      let result = await User.create(request.body);
      return response.status(201).json({message: "user created......."});
    }
    catch(err){
        return response.status(500).json({error: "Internal Server Error"});
    }
}
