import userModel from "../models/user-model.js";
import jwt from "jsonwebtoken"


const home = async(req, res) => {
    try {
        const token = req.cookies.token;
        const {username} = await jwt.verify(token, process.env.JSON_KEY)
        const user = await userModel.findOne({username: username})
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

const registration = async (req, res) => {
    const { username, mobile, password } = req.body;
    
    const userExists = await userModel.findOne({username:username})
    
    if(!userExists){
    const user = await userModel.create({username, mobile, password })
    const token = user.generateToken()

    res.cookie("token", token , {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly:false, secure:true, sameSite:"none", path:"/" })

    res.json({message: "User is created sucessfully !"})
    } else {
        res.json({message: "User is already created"})
    }
}

const login = async (req, res) => {
    const {username, password} = req.body

    const userExists = await userModel.findOne({username})

    if (userExists){
        const checkPass = await userExists.checkPassword(password)
        if(checkPass){
            const token = userExists.generateToken()
            res.cookie("token", token, {maxAge: 30*24*60*60*1000, httpOnly:false, secure:true, sameSite:"none", path:"/"})
            res.json({message:"User LoggedIn sucessfully !", state:true})
        }else {
            res.json({message:"Invalid credentials !", state:false})
        }
    }else {
        res.status(404).json({message: "User not found !"})
    }
}

export default {home, registration, login}