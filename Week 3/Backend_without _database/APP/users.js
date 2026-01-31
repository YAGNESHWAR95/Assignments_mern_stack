import exp from "express"
export const usersApp = exp.Router()

let users=[]
        // get request handling route(read user)
        usersApp.get('/users',(req,res)=>(
            //send res to client
            // res.json({message:"this is responce from GET req handler"})
            res.json({message:"users",users})
        ))
        // post request handling route(create user)
        usersApp.post('/user',(req,res)=>{

            //get user resource 
            let newUser = req.body;
            users.push(newUser);
            //send res
            res.status(201).json({messagw:"newUser",newUser})
        })


        usersApp.put('/users/id',(req,res)=>{
//             //send res
//             //get modified user from req
//             //find the user .with id exists is array
//             //if user is not found,send res as "user not found"
//             //find res as "User modified"
            let userDetails = req.body
            let id = userDetails.id

            let userIndex = users.findIndex(user=>user.id === id)
             if(userIndex === -1)
                return res.status(404).json({message:"user not found"})
            else{
                users.splice(userIndex,1,req.body)
            res.status(200).json({message:"User modified",userDetails})
            }
      })