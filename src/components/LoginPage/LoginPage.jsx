import loginUser from "./LoginPageImages/loginUser.png"
import style from "./LoginPage.module.css"
import { useForm } from "react-hook-form"
import { errorMes } from "../../constants/loginErrMess"
function LoginPage(params) {

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
                    <button type="submit" className={style.loginButton}>Login</button>
                </form>
                <span className={style.span}>Not registred?</span>
                <a href="#" className={style.link}>Create an account!</a>
            </div>
        </div>
    )
}

export default LoginPage