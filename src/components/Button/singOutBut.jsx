import { Link, Route, Routes, useNavigate } from "react-router-dom";
import style from "./button.module.css"
import { RouteConstant } from "../../constants/RouteCostant";
import { useAuth } from "../../context/auth.context";

const SignOutBut = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate()
    const signOutUser = ()=>{
        signOut()
        navigate("/login")
    }
    return (
        <>
            <button onClick={signOutUser} className={style.outBtn}>
                Sign Out
            </button>

        </>
    );
};

export default SignOutBut;