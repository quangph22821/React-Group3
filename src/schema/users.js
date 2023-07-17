import Joi, { ref } from "joi";

export const signupSchema =Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required().message({
        "string.email":"Email không hợp lệ",
        "string.empty":"Không để rỗng email",
        "string.required":"Bạn cần điền email "
    }),
    password:Joi.string().required().min(6).message({
        "string.require":"Bạn cần điền password",
        "string.empty":"Không để trống mật khẩu",
        "any.required":"Tối thiểu {#LIMIT} ký tự"
    }),
    confirmPassword :Joi.string().required().Joi(ref("password")).message({
        "any.only":"Pass is not",
        "string.empty":"Bạn cần điền lại mật khẩu"
    })
})    

export const signinSchema = Joi.object({
    email:Joi.string().email().required().message({
        "string.email":"Email không hợp lệ",
        "string.empty":"Không để rỗng email",
        "any.required":"Bạn cần điền email "
    }),
    password:Joi.string().required().min(6).message({
        "string.require":"Bạn cần điền password",
        "string.empty":"Không để trống mật khẩu",
        "string.min":"Tối thiểu {#LIMIT} ký tự"
    })
})