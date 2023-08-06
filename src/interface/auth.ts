import * as Yup from "yup"
// Signnup
export const signupSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    // lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp")
})

export type signupForm = Yup.InferType<typeof signupSchema>

//signin
export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.number()
})
export type signinForm = Yup.InferType<typeof signinSchema>