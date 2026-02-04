import { Timestamp } from "bson";
import { Schema,model } from "mongoose";

//create Product schema(ProductId,ProductName,Price)
const productSchema = new Schema({
    productname:{
        type:String,
        required:[true,"product id is required"]
    },
    price:{
        type:Number,
        required:[true,"ProductName is required"]

    },
    brand:{
        type:String,
        required:[true,"productPrice is required"]
    }
},
    {
        strict:true,
        Timestamp:true,
        versionkey:false
    }

);

export const ProductModel = model("product",productSchema)