import { Link, Route, Routes } from "react-router-dom";
import style from "./button.module.css"
import LoginPage from "../LoginPage/LoginPage";
import { RouteConstant } from "../../constants/RouteCostant";

const SingOutBut = () => {
    return (
        <>
            <Link to={RouteConstant.LoginPage} className={style.outBtn}>
                Sign Out
            </Link>
           
        </>
    );
};

export default SingOutBut;