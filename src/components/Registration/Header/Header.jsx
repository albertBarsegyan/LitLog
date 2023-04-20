import style from './heade.module.css'
import Logo from '../../../assets/images/logo.jpg';
import Login from "../../Button/LoginBut"
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className={style.logoDiv}>
                <NavLink><img className={style.logo} src={Logo} alt="" /></NavLink>
                
            </div>
            <div className={style.hrefs}>
                <Login/>
            </div>
        </header>
    );
};

export default Header;