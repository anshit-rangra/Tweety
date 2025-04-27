import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

userSchema.pre("save", async function(){
    // await has a specific use here so please don't listen of your extension , await has use 
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.checkPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateToken = function (){
    const key = process.env.JSON_KEY;
    return jwt.sign({
        userId: this._id.toString(),
        username: this.username,
        mobile: this.mobile
    }, key, {
        expiresIn: "30d"
    })
}


const userModel = mongoose.model("users", userSchema) 

export default userModel