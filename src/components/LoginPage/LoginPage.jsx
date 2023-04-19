import loginUser from "./LoginPageImages/loginUser.png"
import style from "./LoginPage.module.css"
import { useForm } from "react-hook-form"
import { errorMes } from "../../constants/loginErrMess"
import google from "./LoginPageImages/google.png"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { NavLink } from "react-router-dom"
import { RouteConstant } from "../../constants/RouteCostant"

function LoginPage() {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm(
        {
            mode: "onChange"
        }
    )

    const onSubmit = data => {
        console.log(JSON.stringify(data))
    }

    const butDisable = errors.email || errors.password

    return (
        <div>
            <Header />
            <div className={style.main}>
                <div className={style.form}>
                    <div className={style.userImg}>
                        <img src={loginUser} alt="loginUser" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>

                            <div>
                                {errors?.email && <p className={style.errormess}>{errors?.email?.message || "Error!"}</p>}
                            </div>

                            <input
                                className={errors.email ? style.errorInp : style.formInput}
                                {
                                ...register("email", {
                                    pattern: {
                                        value: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                        message: errorMes.Email
                                    }
                                })
                                }

                                type="email" placeholder="Email" /><br />
                        </label>
                        <label>

                            <div>
                                {errors?.password && <p className={style.errormess}>{errors?.password?.message || "Error!"}</p>}
                            </div>

                            <input
                                className={errors.password ? style.errorInp : style.formInput}
                                {
                                ...register("password", {
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: errorMes.Password
                                    }
                                })
                                }
                                type="password" placeholder="Password" />

                        </label>
                        <div className={style.but}>
                            <button
                                disabled={butDisable}
                                type="submit" className={style.loginButton}>Login</button>
                            <span>OR</span>
                            <button className={style.googleBut}><span><img src={google} alt="" /></span></button>
                        </div>
                    </form>
                    <div className={style.href}>
                        <span className={style.span}>Not registred?</span>
                        <NavLink to={RouteConstant.RegPage} className={style.link}>Create an account!</NavLink>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage
