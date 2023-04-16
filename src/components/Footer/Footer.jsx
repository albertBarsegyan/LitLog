import { NavLink } from 'react-router-dom';
import Login from '../Button/LoginBut';
import RegIn from '../Button/ReginBut';
import style from './footer.module.css'
import { RouteConstant } from '../../constants/RouteCostant';

function Footer() {
    

    return (
        <footer>
            <p>&copy; All Rights Reserved from K.A.S.A. </p>
            <div>
            <NavLink className={style.link} to={RouteConstant.LoginPage}>Sing In</NavLink>
            <NavLink className={style.link} to={RouteConstant.RegPage}>Sing Up</NavLink>
            </div>
        </footer>
    )
}

export default Footer;