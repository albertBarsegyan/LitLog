import style from './header.module.css'
import Logo from '../../../assets/images/logo.jpg'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Registration } from '../Registration'
import { RouteConstant } from '../../../constants/RouteCostant'
import HeaderButton from '../../Button/Button2/HeaderButton'

const Header = () => {
  return (
    <header>
      <div className={style.logoDiv}>
        <NavLink to={RouteConstant.FirstPage}>
          <img className={style.logo} src={Logo} alt="" />
        </NavLink>
      </div>

      <div className={style.hrefs}>
        <HeaderButton rout={RouteConstant.LoginPage}>Sign In</HeaderButton>
      </div>
    </header>
  )
}

export default Header
