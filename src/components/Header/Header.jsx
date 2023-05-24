import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import style from './header.module.css'
import HeaderButton from '../Button/Button2/HeaderButton'
import { RouteConstant } from '../../constants/RouteCostant'

function Header() {
  return (
    <header>
      <div>
        <NavLink>
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className={style.button}>
        <HeaderButton rout={RouteConstant.LoginPage}>Sign In</HeaderButton>
        <HeaderButton rout={RouteConstant.RegPage}>Sign Up</HeaderButton>
      </div>
    </header>
  )
}
export default Header
