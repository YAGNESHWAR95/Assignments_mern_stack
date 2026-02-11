import exp from 'express'
import { connect } from 'mongoose'
import {config} from 'dotenv'
import { authorRoute } from './API/AuthorAPI.js'
import { userRoute } from './API/UserAPI.js'
import { adminRoute } from './API/AdminAPI.js'
import cookieParser from 'cookie-parser'
import { commonRoute } from './API/CommomAPI.js'
config()



const app = exp()

const connectDB=async ()=>{
    try{
    await connect(process.env.DB_URL)
    console.log("DB connection sucess")
    // start http server
    app.listen(process.env.PORT,()=>console.log("server started"))
}
catch(err){
    console.log("err in DB connection",err)
}
}

connectDB()

app.use(exp.json())

app.use(cookieParser())

app.use("/user-api", userRoute);
app.use("/author-api",authorRoute);
app.use("/admin-api",adminRoute);
app.use("/common-api",commonRoute);

//dealing with invalid path
app.use((req,res,next)=>{
    // console.log(req)
    res.json({message: `${req.url} is  Invalid Path`})
})

//err handling midleware
app.use((err,req,res,next)=>{
    console.log("err:",err)
    res.json({message:"error",reason:err.message})

})

// app.post('/logout',async(req,res)=>{
//     // clear the token
//     res.clearCookie('token',{
//         httpOnly:true,
//         secure:false,
//         sameSite: 'lax'
//     });

//     res.status(200).json({message:'logout successfully'})
// })

