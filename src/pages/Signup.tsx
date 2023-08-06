import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { signupForm, signupSchema } from "../interface/auth"
import { signup } from "../api/auth"


const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<signupForm>({
    resolver: yupResolver(signupSchema)
  })
  const navigate = useNavigate()
  const onSubmit = async (data: signupForm) => {
    try {
      await signup(data)
        .then(() => alert('đăng ký thành công'))
        .then(() => navigate('/signin'))
        .catch(({ response }) => alert(response.data.message))
    } catch (response) {
      console.log(response);
    }
  }
  return <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <div className="login100-pic js-tilt" data-tilt="">
          <img src="./src/assets/img/img-01.png" alt="IMG" />
        </div>
        <form className="login100-form validate-form" onSubmit={handleSubmit(onSubmit)}>
          <span className="login100-form-title">Đăng ký tài khoản</span>
          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input100"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <p className="text-red-600 text-[12px]">
              {errors.name && errors.name.message}
            </p>
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa-solid fa-user"></i>
            </span>
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input100"
              type="text"
              {...register("email")}
              placeholder="Email"
            />
            <p className="text-red-600 text-[12px]">
              {errors.email && errors.email.message}
            </p>
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true" />
            </span>
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input100"
              type="text"
              {...register("password")}
              placeholder="Password"
            />
            <p className="text-red-600 text-[12px]">
              {errors.password && errors.password.message}
            </p>
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              className="input100"
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm password"
            />
            <p className="text-red-600 text-[12px]">
                {errors.confirmPassword && errors.confirmPassword.message}
              </p>
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn">Đăng ký</button>
          </div>
          <div className="text-center p-t-136">
            <Link className="txt2" to="/signin">
              Đăng nhập tại đây
              <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>


}

export default SignupPage