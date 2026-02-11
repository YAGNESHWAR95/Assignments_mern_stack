// import { UserTypeModel } from "../Models/UserModel";

import { UserTypeModel } from "../Models/UserModel.js"

export const checkAdmin = async (req,res,next) =>{
    //get user id
    let uid = req.body?.user || req.params?.userId;
    //verify user
   let user = await UserTypeModel.findById(uid);
   if(!user){
    res.status(401).json({message:"user is not present"})
   }
   if( user.role !== "ADMIN"){
        res.status(403).json({message:"user role is not present"})
   }

   next()
}