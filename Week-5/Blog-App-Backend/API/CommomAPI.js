import exp  from 'express'
export const commonRoute = exp.Router()
import { authenticate } from '../services/AuthService.js';
import { UserTypeModel } from '../Models/UserModel.js';
import bcrypt from 'bcrypt'

//login 
commonRoute.post('/login',async(req,res)=>{
try {
    const userCred = req.body;
    const { token, user } = await authenticate(userCred);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // set to true in production with HTTPS
    });

    res.status(201).json({ message: "Login Success", payload: user });
  } catch (err) {
    res.status(err.status || 400).json({ error: err.message });
  }
})

//Logout

commonRoute.get('/logout',async(req,res)=>{
    res.clearCookie('token',{
        httpOnly:true,
        secure:false,
        sameSite: 'lax'
    });

    res.status(200).json({message:'logout successfully'})
})

commonRoute.post('/updatepassword', async (req, res) => {
  try {
    const userCred = req.body;
    const { token, user } = await authenticate(userCred);

    const hashedPassword = await bcrypt.hash(userCred.changedPassword, 12);
    user.password = hashedPassword;
    await user.save();  // works now

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
});