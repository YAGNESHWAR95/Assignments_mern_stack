import { Schema,model } from "mongoose";

//create Product schema(ProductId,ProductName,Price)
const productSchema = new Schema({

    productid:{
        type:Number,
        required:[true,"product id is required"]
    },
    productname:{
        type:String,
        required:[true,"ProductName is required"]

    },
    price:{
        type:Number,
        required:[true,"productPrice is required"]
    }

});

export const ProductModel = model("product",productSchema)