import ReginBut from "./Navigation/ReginBut";
import logo from "./images/logo.jpg"
import style from "./header.module.css"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className={style.logoDiv}>
                <NavLink>
                    <img src={logo} className={style.logo} alt="" />
                </NavLink>
            </div>
            <div>
                <ReginBut />
            </div>
        </header>
    );
};

export default Header;