import { useNavigate } from "react-router-dom";
import { RouteConstant } from "../../constants/RouteCostant";
import style from './button.module.css'


function Login() {
    const navigation = useNavigate();


    return <button onClick={() => navigation(RouteConstant.LoginPage)}>Sing In <i class="fa-solid fa-user"></i>  </button>

}

export default Login;
