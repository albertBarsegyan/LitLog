import style from './heade.module.css';
import Logo from './images/photo_2023-04-18_20-18-05.jpg';
import Login from '../btn/btn';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className={style.logoDiv}>
        <NavLink>
          <img className={style.logo} src={Logo} alt="" />
        </NavLink>
      </div>
      <div className={style.hrefs}>
        <Login />
      </div>
    </header>
  );
};

export default Header;
