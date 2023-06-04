import style from './header.module.css'
import logo from '../../assets/images/logo.jpg'
import HeaderButton from '../Button/Button2/HeaderButton'
import { NavLink } from 'react-router-dom'
import { RouteConstant } from '../../constants/RouteCostant'
import Icons from '../../assets/images/icons/Icons'
import { Icon } from '../../constants/PropsIcon'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div>
        <NavLink to={RouteConstant.FirstPage}>
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
      </div>
      <div
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
        className={style.bars}
      >
        <Icons bars={Icon.bars} />
      </div>
      <div className={menuOpen ? `${style.active}` : `${style.navigate}`}>
        <HeaderButton rout={RouteConstant.LoginPage}>
          <Icons singIn={Icon.singIn} /> Sign In
        </HeaderButton>
        <HeaderButton rout={RouteConstant.RegPage}>
          <Icons singUp={Icon.singUp} /> Sign Up
        </HeaderButton>
      </div>
    </header>
  )
}
export default Header
