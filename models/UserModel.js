import { Schema,model } from "mongoose";


//create cart schema
const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: [1, "Quantity must be at least 1"]
    }
});


//create Product schema(ProductId,ProductName,Price)
const userSchema = new Schema({

    name:{
        type:String,
        required:[true,"name id is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true //add to index
    },
    password:{
            type:String,
            required:[true,"password is required"]

    },
    cart:{
        type:[cartSchema],
    }

})

// create user model with that schema
export const UserModel = model("user",userSchema)