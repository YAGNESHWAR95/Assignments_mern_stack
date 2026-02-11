import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserTypeModel } from "../Models/UserModel.js"
import { config } from "dotenv"

config()

//register function
export const register = async(userObj) =>{
    //create doc
    const userDoc = new UserTypeModel(userObj);
    //validate for empty password
    await userDoc.validate();
    //hash the plain password
    const hashedPassword = await bcrypt.hash(userDoc.password,12)
    // replace plain password to hashed password
    userDoc.password = hashedPassword;
    //save
    const created = await userDoc.save()
    // convert doc to obj to remove password
    const newUserObj = created.toObject();
    //remove password
    delete newUserObj.password;
    //return user obj without password
    return newUserObj;

}


export const authenticate = async ({ email, password }) => {
    //check user with email & role
  const user = await UserTypeModel.findOne({ email });
  if (!user) {
    const err = new Error("Invalid email ");
    err.status = 401;
    throw err;
  }
  //if user valid ,but blocked by admin

  //compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const err = new Error("Invalid password");
    err.status = 401;
    throw err;
  }

  if(!user.isActive){
    resizeBy.status(404).json({message:"user is deactivated"})
  }
  
  //generate token
  const token = jwt.sign({ userId: user._id, 
    role: user.role, email: user.email }, 
    process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const userObj = user.toObject();
  delete userObj.password;

  return { token, user };
};