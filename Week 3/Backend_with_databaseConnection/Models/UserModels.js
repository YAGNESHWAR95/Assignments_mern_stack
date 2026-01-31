import {Schema,model} from 'mongoose'

//Create User schema(username,password,age)
const userSchema = new Schema({

    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length should be 4"],
        maxLength:[10,"max length exceeded"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    age:{
        type:Number,
        required:[true,"age is required"],
        min:[18,"Age should be above 18"],
        max:[25,"Age should be below 25"]
    }

});


// create user model with that schema
export const UserModel = model("user",userSchema)
