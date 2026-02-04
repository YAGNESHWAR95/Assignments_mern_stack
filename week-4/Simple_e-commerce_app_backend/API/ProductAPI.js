import exp from "express"
import {ProductModel} from "../models/ProductModel.js"
export const productApp = exp.Router()

productApp.get('/products',(req,res)=>(
            //send res to client
            // res.json({message:"this is responce from GET req handler"})
            res.json({message:"port is working"})
        ))

productApp.post('/products',async(req,res) =>{
          //get the product
          let newProduct = req.body;
          let newProductDoc = new ProductModel(newProduct)
          await newProductDoc.save();
          res.status(200).json({message:"new product is created",payload:newProductDoc})
        })


