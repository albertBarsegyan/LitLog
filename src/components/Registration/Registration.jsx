import style from "./registration.module.css"
import Rbook from "../images/Rbook.png"

export function Registration() {


    return (
        <div className={style.main}>
            <div>
                <img src={Rbook} alt="" />
            </div>
            <form action="" >
                <button></button>
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
