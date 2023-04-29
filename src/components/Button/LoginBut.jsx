import { Link } from "react-router-dom";
import { RouteConstant } from "../../constants/RouteCostant";
import style from './button.module.css'

function Login() {

    return (
        <Link className={style.fBtn} to={RouteConstant.LoginPage}>Sign In</Link>
    )

}

export default Login;
