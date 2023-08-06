import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { signin } from "../api/auth"
import { Link, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../hook"
import { signinForm, signinSchema } from "../interface/auth"


const SigninPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<signinForm>({
    resolver: yupResolver(signinSchema)
  })
  const [user, setUser] = useLocalStorage("user", null)// khai báo và lưu trữ user vào local
  // console.log(user);

  const navigate = useNavigate()
  const onSubmit = async (data: signinForm) => {
    try {

      const { data: { accessToken, user } } = await signin(data)
      setUser({
        accessToken,
        ...user
      })
      await signin(data)
        .then(() => alert('đăng nhập thành công'))
        .then(() => navigate('/'))
        .catch(({ response }) => alert(response.data.message))
      if (user.role === "admin") {
        navigate(`/admin/home`);
      } else {
        navigate(`/`)
      }
      // if (user.role) {
      //   navigate('/admin')
      // } else {
      //   navigate('/')
      // }
    } catch (error) {
      console.log(error);

    }


  }
  return <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <div className="login100-pic js-tilt" data-tilt="">
          <img src="./src/assets/img/img-01.png" alt="IMG" />
        </div>
        <form className="login100-form validate-form" onSubmit={handleSubmit(onSubmit)}>
          <span className="login100-form-title">Đăng nhập tài khoản</span>
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
            data-validate="Password is required"
          >
            <input
              className="input100"
              type="password"
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
          <div className="container-login100-form-btn">
            <button className="login100-form-btn">Đăng nhập</button>
          </div>
          <div className="text-center p-t-136">
            <Link className="txt2" to="/signup">
              Đăng ký tài khoản
              <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>


}

export default SigninPage