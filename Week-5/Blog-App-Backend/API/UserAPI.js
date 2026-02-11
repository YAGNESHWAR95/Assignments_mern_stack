
import exp from 'express'
import { UserTypeModel } from '../Models/UserModel.js' 
export const userRoute=exp.Router()
import {register,authenticate} from '../services/AuthService.js'
// import { checkAuthors } from '../MiddleServer/checkAuthor.js'
import { articleTypeModel } from '../Models/ArticleModel.js'
import { verifyToken } from '../MiddleServer/verifyToken.js'
// import { checkAuthor } from '../MiddleServer/checkAuthor.js'
import { checkUsers } from '../MiddleServer/checkUsers.js'



// Register USER
userRoute.post('/users',async (req,res)=>{
  //get the user Obj
  const userObj = req.body;
  //call register
  const newUserObj = await register({...userObj,role:"USER"});
  // send res
  res.status(201).json({message:"user is created",payload: newUserObj})
})
// Autheticate user

// userRoute.post("/authenticate", async (req, res) => {
//   //get user cred object
//   let userCred = req.body;
//   //call authenticate service
//   let { token, user } = await authenticate(userCred);
//   //save tokan as httpOnly cookie
//   res.cookie("token", token, {
//     httpOnly: true,
//     sameSite: "lax",
//     secure: false,
//   });
//   //send res
//   res.status(200).json({ message: "login success", payload: user });
// });

// read all articles
// Add comment to an article
  

// userRoute.post('/user',async(req,res)=>{
//     try{
//     // getting the user from req
//     let newUser = req.body;
//     // create a user doc
//     let userDoc = new UserTypeModel(newUser)
//     // validate the user
//      await userDoc.validate()
//     // hash the password using bycript
//     const hashedPassword = await hash(newUser.password,12)
//     //keep the password as hashedpassword
//     userDoc.password = hashedPassword
//     //save the userDoc
//     await userDoc.save({validateBeforeSave: false})
//     //send res
//     res.status(200).json({message:"new user is created",payload:userDoc})
//   }

//          catch(err){
//             if(err === "ValidationError"){
//               return res.status(200).json({message: err.message})
//             }
//             res.status(500).json({message:"server error"})
//           }

// });

// userRoute.post('/users/auth/user-id/:uid/password/:passKey',async (req,res)=>{
//     // getting the values from params
//     let {uid,passKey} = req.params
//     //check for username
//      let userOfDB = await UserTypeModel.findOne({username:uid})
//     // validating user
//     const user = await UserModel.findById(uid);
//     if (!user) {
//       return res.status(404).json({ message: "User does not exist" });
//     }

//     //validating password
//     let status = compare(userOfDB.password === passKey);

//        if(status === false){
//             return res.status(404).json({message:"Invalid password"})
//           }

// })


//read all articles(protected route)

userRoute.get('/articles/:userId',verifyToken,checkUsers,async (req,res) =>{
    let articles = await articleTypeModel.find();
    res.status(200).json({message:"articles are",payload:articles});
})



// Add comment to the article(protected)

userRoute.put('/comments',verifyToken,checkUsers,async(req,res)=>{
  const { articleId, comment,user } = req.body;
  let articleInDB = await articleTypeModel.findById(articleId)
  if(!articleInDB){
    return res.status(400).json({message:"article not found"})
  }
  let updatedComment = await articleTypeModel.findByIdAndUpdate(
  articleId,
  { $push: { comments: { user, comment } } },
  { new: true }
);

  
    res.status(200).json({
      message: "Comment added successfully",
      payload: updatedArticle
    });
  
})

