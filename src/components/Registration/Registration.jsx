import style from "./registration.module.css"
import Rbook from "../images/Rbook.png"
import google from "../images/google.png"

export function Registration() {


    return (
        <div className={style.main}>
            <div>
                <h2 className={style.regheading}> This is  Register page </h2>
                <img className={style.imgbook} src={Rbook} alt="" />
            </div>
            <form action="" >

                <button className={style.googleBtn}><img src={google} alt="" className={style.googleImg} /> Sing up with Google</button>

                <div className={style.border}>
                    <div className={style.spBor}></div>
                        <span>or</span>
                    <div className={style.spBor}></div>
                </div>

                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Password" />
                <button className={style.but} type="submit">Submit</button>|
            </form>
        </div>
    )
}
