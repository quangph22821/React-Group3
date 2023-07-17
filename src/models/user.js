import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    role:{
        type:String,
        default:"member"
    }
})

export default mongoose.model("Users",userSchema)