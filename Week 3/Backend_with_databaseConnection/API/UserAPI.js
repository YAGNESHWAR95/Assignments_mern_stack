import exp from "express"
import {UserModel} from "../models/UserModels.js"
export const usersApp = exp.Router()

usersApp.get('/users',(req,res)=>(
            //send res to client
            // res.json({message:"this is responce from GET req handler"})
            res.json({message:"port is working"})
        ))


        // USER API ROUTES

        //Create user

        usersApp.post('/users',async(req,res) =>{
          //get the user
          let newUser = req.body;
          let newUserDoc = new UserModel(newUser)
          await newUserDoc.save();
          res.status(200).json({message:"new user is created"})
        })


        usersApp.get('/users',async(req,res)=>{
            //read users from db 
           const usersList =UserModel.find("user",UserModel);
            //send res
            return res.status(200).json({message:"created db"})
          })


          usersApp.get("/users/:id",async (req,res) => {
            //get ObjectId from url params
            let objId = req.params.id;
            //find the matching id 
            let userObj = await UserModel.findById(objId);
            // return res
            res.status(200).json({message:"User",payload:userObj});
          });

          usersApp.put("/users/:id",async (req,res) =>{
            //get objectId from url params
            let objId = req.params.id;
            // get the id from params
            let modifiedUser = req.body
            //make update
           let latestUser= await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true});
           //return res
           res.status(200).json({message:"user modified",payload: latestUser});

           })

           usersApp.delete("/users/:id",async(req,res) =>{
            //get the userid from url param
            let objId = req.params.id;
            //delete user by id
            let deletedUser = await UserModel.findByIdAndDelete(objId)
            res.status(200).json({message:"user removed",payload:deletedUser });
           })


