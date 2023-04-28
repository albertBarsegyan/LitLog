// import ReginBut from "./Navigation/ReginBut";
import logo from "../../../assets/images/logo.jpg"
import style from "./header.module.css"
import { NavLink, Route, Routes } from "react-router-dom";
import RegIn from "../../Button/ReginBut";
import { RouteConstant } from "../../../constants/RouteCostant";
import LoginPage from "../LoginPage";

const Header = () => {
    return (
        <header>
            <div className={style.logoDiv}>
                <NavLink to={RouteConstant.FirstPage}>
                    <img src={logo} className={style.logo} alt="" />
                </NavLink>
            </div>

            <div>
                <RegIn />
            </div>
            <Routes>
                <Route path={RouteConstant.LoginPage} element={<LoginPage />} />
            </Routes>
        </header>

    );
};

export default Header;