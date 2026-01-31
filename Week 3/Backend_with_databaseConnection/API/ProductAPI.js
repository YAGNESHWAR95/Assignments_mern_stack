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
          res.status(200).json({message:"new product is created"})
        })


productApp.get('/products',async(req,res)=>{
    //read the product from db
    const productList = ProductModel.find("product",ProductModel);
    //res
    return res.status(200).json({message:"database is successfully created"})

})


productApp.get("/products/:id",async (req,res)=>{
    //get productId from url params
    let productId = req.params.id;
    //find th ematching product id
    let productObj = await ProductModel.findById(productId);
    //return res
    res.status(200).json({message:"Product",payload:productObj})
})

productApp.put('/products/:id',async(req,res)=>{
    //get productId from url params
    let productId = req.params.id;
    // get the product from params
    let modifiedProduct = req.body
    //find th ematching product id
    let productObj = await ProductModel.findByIdAndUpdate(productId,{$set:{...modifiedProduct}},{new:true});
    //return res
    res.status(200).json({message:"Product modified",payload:productObj})
})




