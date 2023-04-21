import { NavLink } from 'react-router-dom';
import style from './footer.module.css';
import { RouterConstant } from '../../../constants/RoutConstant';

const Footer = () => {
  return (
    <footer>
      <p>&copy; All Rights Reserved from K.A.S.A. </p>
      <div>
        <NavLink className={style.link} to={RouterConstant.LoginPage}>
          Sing In
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
