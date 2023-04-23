import { NavLink, Route, Routes } from "react-router-dom";
import logo from "../../assets/images/logo.jpg"
import style from "./header.module.css"
import Login from "../Button/LoginBut";
import RegIn from "../Button/ReginBut";
import { FirstPage } from "../FirstPage/FirstPage";


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