import { NavLink } from "react-router-dom";
import logo from "../FirstPage/images/logo.jpg"
import style from "./header.module.css"
import Login from "../Button/LoginBut";
import RegIn from "../Button/ReginBut";


function Header() {
    return (
        <header>
            <div>
                <NavLink>
                    <img className={style.logo} src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className={style.button}>
                <Login />
                <RegIn />
            </div>

        </header>
    )
}
export default Header;