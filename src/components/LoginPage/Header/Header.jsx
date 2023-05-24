// import ReginBut from "./Navigation/ReginBut";
import logo from '../../../assets/images/logo.jpg'
import style from './header.module.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { RouteConstant } from '../../../constants/RouteCostant'
import LoginPage from '../LoginPage'
import HeaderButton from '../../Button/Button2/HeaderButton'

const Header = () => {
  return (
    <header>
      <div className={style.logoDiv}>
        <NavLink to={RouteConstant.FirstPage}>
          <img src={logo} className={style.logo} alt="" />
        </NavLink>
      </div>

      <div>
        <HeaderButton rout={RouteConstant.RegPage}>Sign Up</HeaderButton>
      </div>
    </header>
  )
}

export default Header
