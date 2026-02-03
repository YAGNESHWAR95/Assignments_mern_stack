import exp from "express"
import {UserModel} from "../models/UserModel.js"
export const usersApp = exp.Router()
import { hash,compare} from "bcrypt"
import { ProductModel } from "../models/ProductModel.js"

usersApp.get('/user',(req,res) =>{
    return res.status(200).json({message:"route is created"})
})

usersApp.post('/users',async(req,res) =>{
          //get the user
          let newUser = req.body;
          //create a user doc 
          let newUserDoc = new UserModel(newUser)
          // run mongoose validation before hashing
          if(!newUserDoc.validate()){
            return res.status(400).json({message:"user ia not validated"})
          }
          // hash the user password
          let hashedPassword = await hash(newUser.password,12)
          //replace the plain text with hashes password
          newUser.password = hashedPassword;
          //save the userDoc
          await newUserDoc.save();
          // validation before checking
          await newUserDoc.save({ validateBeforeSave : false})

          //send res
          res.status(200).json({message:"new user is created",payload:newUserDoc})


        })


//updating user cart
usersApp.put('/user-cart/userid/:uid/productid/:pid', async (req, res) => {
  let { uid,pid} = req.params;
  //check user
  let checkDBUser = await UserModel.findById(uid)
  if(!checkDBUser)
    return res.status(404).json({message:"user does not exist"})
  let checkProduct = await ProductModel.findById(pid)
   if(!checkProduct)
    return res.status(404).json({message:"Product does not exist"})
  //add item into user cart
//   console.log("hello")
  let modifiedCart = await UserModel.findByIdAndUpdate(
    uid,
    { $push:{cart:{product:pid}}},
  {new:true}
  ).populate("cart.product")
});

// usersApp.put('/user-cart/userid/)
// Add product to user's cart
usersApp.put('/user-cart/userid/:uid/productid/:pid/quantity/:qty', async (req, res) => {
  try {
    const { uid, pid, qty } = req.params;
    const quantity = parseInt(qty, 10);


    // Validate user
    const user = await UserModel.findById(uid);
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // Validate product
    const product = await ProductModel.findById(pid);
    if (!product) {
      return res.status(404).json({ message: "Product does not exist" });
    }

    // Check if product already exists in cart
    const cartItem = user.cart.find(
      item => item.product === pid
    );

    if (cartItem) {
      // Increment quantity
      cartItem.quantity += quantity;
    } else {
      // Add new product to cart
      user.cart.push({ product: pid, quantity });
    }

    await user.save();

    // Return updated cart with product details populated
    const updatedUser = await UserModel.findById(uid).populate("cart.product");
    return res.status(200).json({
      message: "Cart updated successfully",
      cart: updatedUser.cart
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});
