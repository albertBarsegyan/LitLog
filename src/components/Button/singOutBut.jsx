import { Link, Route, Routes } from "react-router-dom";
import style from "./button.module.css"
import { RouteConstant } from "../../constants/RouteCostant";
import { useAuth } from "../../context/auth.context";

const SignOutBut = () => {
    const { user, signOut } = useAuth();

    const signOutUser = ()=>{
        signOut()
    }
    return (
        <>
            <Link onClick={signOutUser} to={RouteConstant.LoginPage} className={style.outBtn}>
                Sign Out
            </Link>

        </>
    );
};

export default SignOutBut;