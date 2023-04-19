import { useNavigate } from "react-router-dom";
import { RouteConstant } from "../../constants/RouteCostant";
import style from './button.module.css'

function RegIn() {
    const navigation = useNavigate();

    return <button onClick={() => navigation(RouteConstant.RegPage)}>Sing Up <i class="fa-solid fa-user-plus"></i></button>

}

export default RegIn;

