// Create HTTP server
    // import express module
    import exp from "express"
    import { usersApp } from "./API/users.js"
    import {productApp} from "./API/product.js"
    //Create Server
    const app = exp()
    //Assign port number
    app.listen(4000,()=>console.log('Httpp server listening port 4000..'))

    //body passing middleware
    app.use(exp.json())
    app.use("/user-api", usersApp);
    app.use("/product-api",productApp);


    //create a custom middleware
    // function middleware1(req,res,next){
    //     console.log("middleware1 executed")
    //     //send res
    //     // res.json({message:"res from middileware1"})
    //     //forward the res to next middleware
    //     next()
    // }
    // function middleware2(req,res,next){
    //     console.log("middleware2 executed")
    //     //send res
    //     // res.json({message:"res from middileware1"})
    //     //forward the res to next middleware
    //     next()
        

    // }

    // app.use(middleware1)

    // Create API(req handlers - route )

//         let users=[]
//         // get request handling route(read user)
//         app.get('/users',middleware2,(req,res)=>(
//             //send res to client
//             // res.json({message:"this is responce from GET req handler"})
//             res.json({message:"users",users})
//         ))
//         // post request handling route(create user)
//         app.post('/user',(req,res)=>{

//             //get user resource 
//             let newUser = req.body;
//             users.push(newUser);
//             //send res
//             res.status(201).json({messagw:"newUser",newUser})
//         })
//         // put request handling route(update user)
//         app.put('/users/id',(req,res)=>{
//             //send res
//             //get modified user from req
//             //find the user .with id exists is array
//             //if user is not found,send res as "user not found"
//             //find res as "User modified"
//             let userDetails = req.body
//             let id = userDetails.id

//             let userIndex = users.findIndex(user=>user.id === id)
//              if(userIndex === -1)
//                 return res.status(404).json({message:"user not found"})
//             else{
//                 users.splice(userIndex,1,req.body)
//             res.status(200).json({message:"User modified",userDetails})
//             }
//       })


//       //read user by id
//       app.get('/users/:id',(req,res) =>{

//         console.log(req.params)
//         //read id from url parameter
//         let userId = Number(req.params.id) //{id : '200'}

//         //read user by this id
//         let user = users.find(userObj => userObj.id === userId)

//         if(!user){
//             return res.status(404).json({message:"user not found"})
//         }
//         //send resp
//         res.status(200).json({message:"user",payload:user})

//       })
//         // delete request handling route(delete user)
//         app.delete('/users/:id',(req,res)=>{
//         //read id from url parameter
//         let userId = Number(req.params.id) //{id : '200'}

//         //read user by this id
//         let user = users.findIndex(userObj => userObj.id === userId)


//         if(user === -1)
//                 return res.status(404).json({message:"user not found"})
//             else{
//                 let deletedUser = users.splice(user,1)
//             res.status(200).json({message:"User Deleted",deletedUser})
//             }
//         })

// 1