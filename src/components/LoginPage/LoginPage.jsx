import loginUser from "./LoginPageImages/loginUser.png"
import style from "./LoginPage.module.css"
function LoginPage(params) {
    return (
        <div className={style.main}>
            <div className={style.form}>
                <div className={style.userImg}>
                    <img src={loginUser} alt="loginUser" />
                </div>
                <form action="">
                    <input type="email" className={style.formInput} placeholder="Email" /><br />
                    <input type="password" className={style.formInput} placeholder="Password" />
                    <button type="submit" className={style.loginButton}>Login</button>
                </form>
                <span className={style.span}>Not registred?</span>
                <a href="#" className={style.link}>Create an account!</a>
            </div>
        </div>
    )
}

export default LoginPage