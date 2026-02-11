
import exp from 'express'
import { UserTypeModel } from '../Models/UserModel.js';
import { authenticate } from '../services/AuthService.js';
import { checkAdmin } from '../MiddleServer/checkAdmin.js';
import { verifyToken } from '../MiddleServer/verifyToken.js';
import { articleTypeModel } from '../Models/ArticleModel.js';
// import { UserTypeModel } from '../Models/UserModel.js';

export const adminRoute=exp.Router()

// Authenticate admin
adminRoute.post('/authenticate', async(req,res)=>{
   try {
    const userCred = req.body;
    const { token, user } = await authenticate(userCred);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // set to true in production with HTTPS
    });

    res.status(201).json({ message: "Login Success", payload: user });
  } catch (err) {
    res.status(err.status || 400).json({ error: err.message });
  }
});

// Read all articles

adminRoute.get("/articles/:userId",verifyToken,checkAdmin,async(req,res)=>{
const articleDoc =await articleTypeModel.find();
res.status(200).json({message :'articles are',payload:articleDoc})
})

// Block/unblock user

adminRoute.get("/block/:userId/:uid",verifyToken,checkAdmin,async(req,res)=>{
    let userId = req.params.uid;
    const userDoc = await UserTypeModel.findById(userId);
    if(!userDoc){
        res.status(401).json({message:'user is not present'})
    }

    if(!userDoc.isActive){
        res.status(401).json({message:"user is already blocked"})
    }
    let updateUserStatus = await UserTypeModel.findByIdAndUpdate(
        userId,
        {
            $set:{isActive : false},
        },
        {new:true},
    );
    res.status(200).json({ message: "user is blocked" });
});

adminRoute.get("/unblock/:userId/:uid",verifyToken,checkAdmin,async(req,res)=>{
    let userId = req.params.uid;
    const userDoc = await UserTypeModel.findById(userId);
    if(!userDoc){
        res.status(401).json({message:'user is not present'})
    }

    if(userDoc.isActive){
        res.status(401).json({message:"user is already Unblocked"})
    }
    let updateUserStatus = await UserTypeModel.findByIdAndUpdate(
        userId,
        {
            $set:{isActive : true},
        },
        {new:true},
    );
    res.status(200).json({ message: "user is unblocked" });
});