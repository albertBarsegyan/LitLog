import loginUser from "./LoginPageImages/loginUser.png"
import style from "./LoginPage.module.css"
import { useForm } from "react-hook-form"
import { errorMes } from "../../constants/loginErrMess"
import google from "./LoginPageImages/google.png"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

function LoginPage() {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm()

    const onSubmit = data => {
        console.log(JSON.stringify(data))
    }
    return (
        <div>
            <Header />
            <div className={style.main}>
                <div className={style.form}>
                    <div className={style.userImg}>
                        <img src={loginUser} alt="loginUser" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {
                            ...register("email", {
                                pattern: {
                                    value: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                    message: errorMes.Email
                                }
                            })
                            }

                            type="email" className={style.formInput} placeholder="Email" /><br />
                        <input

                            {
                            ...register("password", {
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                    message: errorMes.Password
                                }
                            })
                            }
                            type="password" className={style.formInput} placeholder="Password" />
                        <div className={style.but}>
                            <button type="submit" className={style.loginButton}>Login</button>
                            <span>OR</span>
                            <button className={style.googleBut}><span><img src={google} alt="" /></span></button>
                        </div>
                    </form>
                    <span className={style.span}>Not registred?</span>
                    <a href="#" className={style.link}>Create an account!</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage