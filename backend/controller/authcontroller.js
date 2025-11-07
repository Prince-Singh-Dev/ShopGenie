import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { gentoken, gentoken1 } from "../config/token.js";


export const registration = async (req,res)=>{
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
            maxAge : 7*24*60*60*1000
        })
        return res.status(201).json(user)
    } catch(error){
        console.log("registration Error")
        return res.status(500).json({message:`registration error ${error}`})
    }
}

export const login = async (req,res)=>{
    try{
        let{email,password} = req.body;
        let user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message : "User is not found"})
        }
        let isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(404).json({message : "Invalid User id password"})
        }
        let token = await gentoken(user._id)
        res.cookie("token",token,{
            httpOnly : true,
            secure:false,
            sameSite : "Strict",
            maxAge : 7*24*60*60*1000
        })
        return res.status(201).json(user)

    }catch(error){
        console.log("Login Error")
        return res.status(500).json({message:`Login error ${error}`})
    }
}

export const logout = async(req,res) => {
    try{
        res.clearCookie("token")
        return res.status(200).json({message : "Logout Successful"})
    } catch(error){
        console.log("logout error")
        return res.status(500).json({message:`Logout error ${error}`})
    }
}

export const googleLogin = async(req,res) =>{
    try{
        let {name ,email} = req.body;
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name,email
            })
        }
        let token = await gentoken(user._id)
        res.cookie("token",token,{
            httpOnly : true,
            secure:false,
            sameSite : "Strict",
            maxAge : 7*24*60*60*1000
        })
        return res.status(200).json(user)
    } catch(error){
        console.log("Google Login error")
        return res.status(500).json({message:`Google Login error ${error}`})
    }
}

export const adminLogin = async(req,res) => {
    try{
        let {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            let token = await gentoken1(email)
            res.cookie("token",token,{
                httpOnly : true,
                secure:false,
                sameSite : "Strict",
                maxAge : 1*24*60*60*1000
            })
            return res.status(200).json(token)
        }
        return res.status(400).json({message : "Invalid credentials"})
    }catch(error){
        console.log("Admin Login error")
        return res.status(500).json({message:`Admin Login error ${error}`})
    }
}

