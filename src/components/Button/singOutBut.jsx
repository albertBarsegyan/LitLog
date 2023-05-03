import { Link, Route, Routes } from "react-router-dom";
import style from "./button.module.css"
import { RouteConstant } from "../../constants/RouteCostant";

const SignOutBut = () => {
    return (
        <>
            <Link to={RouteConstant.LoginPage} className={style.outBtn}>
                Sign Out
            </Link>

        </>
    );
};

export default SignOutBut;