<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import { RouteConstant } from '../../constants/RouteCostant';

// import style from './button.module.css';

function RegIn() {
  const navigation = useNavigate();

  return (
    <button onClick={() => navigation(RouteConstant.RegPage)}>
      Sing Up <i className="fa-solid fa-user-plus"></i>
    </button>
  );
=======
import { Link } from "react-router-dom";
import { RouteConstant } from "../../constants/RouteCostant";
import style from './button.module.css'

function RegIn() {

    return (
        <Link className={style.fBtn} to={RouteConstant.RegPage}>Sing Up</Link>
    )
>>>>>>> newBranch
}

export default RegIn;
