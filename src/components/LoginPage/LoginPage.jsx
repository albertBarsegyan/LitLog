import loginUser from "./LoginPageImages/loginUser.png"
import style from "./LoginPage.module.css"
function LoginPage(params) {
    return (
        <div className={style.form}>
            <div className={style.userImg}>
                <img src={loginUser} alt="loginUser" />
            </div>
            <form action="">
                <input type="email" className={style.formInput} placeholder="Email" /><br />
                <input type="password" className={style.formInput} placeholder="Password" />
                <div className={style.remember}>
                    <label htmlFor="remember_me" className={style.remember}>
                        <input type="checkbox" id="remember_me" />
                        Remember me
                    </label>
                    <a href="#">Forget password?</a>
                </div>
                <button type="submit">Login</button>
            </form>
            <span>Not registred?<a href="#">Create an account!</a></span>
        </div>
    )
}

export default LoginPage