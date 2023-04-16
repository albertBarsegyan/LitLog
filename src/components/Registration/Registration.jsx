import style from "./registration.module.css"
import Rbook from "../images/Rbook.png"
import google from "../images/google.png"

export function Registration() {


    return (
        <div className={style.main}>
            <div>
                <img src={Rbook} alt="" />
            </div>
            <form action="" >
                <button className={style.googleBtn}><img src={google} alt="" className={style.googleImg} /> Sing up with Google</button>

                <div className="border">
                    <div className={style.spBor}></div>
                        <span>or</span>
                    <div className={style.spBor}></div>
                </div>

                    
                

                <input type="text" placeholder="Name" />
                <input type="text" placeholder="SurName" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Password" />
                <button className={style.but} type="submit">Submit</button>|
            </form>
        </div>
    )
}
