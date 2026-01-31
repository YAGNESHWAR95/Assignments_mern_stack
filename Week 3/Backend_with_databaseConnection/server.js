import exp from "express"
import { usersApp } from  "./API/UserAPI.js"
import { productApp } from "./API/ProductAPI.js"
import {connect} from 'mongoose'
// import mongoose from "mongoose"

const app = exp()

//connect to db server
async function connectionDB(){
    try{
        await connect('mongodb://localhost:27017/anuragdb')
        console.log("Connected to database")
        //Assign port
    }
    catch(err){
        console.log("error in connecting to db",err)
    }
}



connectionDB()
//Assign port
const port = 4000;
app.listen(port,()=>console.log("server is listening...",port))


app.use(exp.json())
app.use("/products-api",productApp);

app.use("/user-api", usersApp);


// app.use(re)

