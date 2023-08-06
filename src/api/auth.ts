import axios from "axios";
import { signinForm, signupForm } from "../interface/auth";
const instance = axios.create({
    baseURL: "http://localhost:8088"
})

export const signup = (data:signupForm)=>{
    const uri = "auth/signup"
    return instance.post(uri,data)
}

export const signin = (data:signinForm)=>{
    const uri = "auth/signin"
    return instance.post(uri,data)
}