import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { gentoken } from "../config/token.js";


export const register = async (req,res)=>{
    try{
        const {name , email , password} = req.body;
        const existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({message : "User Already Exists"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message : "Enter valid Email"})
        }
        if(password.length < 8){
            return res.status(400).json({message : "Enter Strong Password"})
        }
        let hashPassword = await bcrypt.hash(password,10)

        const user = await User.create({name , email , password:hashPassword})
        let token = await gentoken(user._id)
        res.cookie("token",token,{
            httpOnly : true,
            secure:false,
            sameSite : "Strict",
            maxAge : 7*24*60*1000
        })
        return res.status(201).json(user)
    } catch(error){
        console.log("Register Error")
        return res.status(500).json({message:`Register error ${error}`})
    }
}