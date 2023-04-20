// import ReginBut from "./Navigation/ReginBut";
import logo from "../../../assets/images/logo.jpg"
import style from "./header.module.css"
import { NavLink } from "react-router-dom";
import RegIn from "../../Button/ReginBut";

const Header = () => {
    return (
        <header>
            <div className={style.logoDiv}>
                <NavLink>
                    <img src={logo} className={style.logo} alt="" />
                </NavLink>
            </div>
            <div>
                <RegIn />
            </div>
        </header>
    );
};

export default Header;