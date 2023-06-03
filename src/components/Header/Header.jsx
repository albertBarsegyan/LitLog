import './header.module.css'
import logo from '../../assets/images/logo.jpg'
import HeaderButton from '../Button/Button2/HeaderButton'
import { NavLink } from 'react-router-dom'
import { RouteConstant } from '../../constants/RouteCostant'

function Header() {
  return (
    <header>
      <div>
        <NavLink to={RouteConstant.FirstPage}>
          <img
            style={{ width: '200px', marginLeft: '30px' }}
            src={logo}
            alt="logo"
          />
        </NavLink>
      </div>
      .
      <div style={{ marginRight: 50 }}>
        <HeaderButton rout={RouteConstant.LoginPage}>Sign In</HeaderButton>
        <HeaderButton rout={RouteConstant.RegPage}>Sign Up</HeaderButton>
      </div>
    </header>
  )
}
export default Header
