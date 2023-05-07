import style from './header.module.css'
import Logo from '../../../assets/images/logo.jpg'
import Login from '../../Button/LoginBut'
import { NavLink, Route, Routes } from 'react-router-dom'
import { Registration } from '../Registration'
import { RouteConstant } from '../../../constants/RouteCostant'

const Header = () => {
  return (
    <header>
      <div className={style.logoDiv}>
        <NavLink to={RouteConstant.FirstPage}>
          <img className={style.logo} src={Logo} alt="" />
        </NavLink>
      </div>

      <div className={style.hrefs}>
        <Login />
      </div>
      <Routes>
        <Route path={RouteConstant.RegPage} element={<Registration />} />
      </Routes>
    </header>
  )
}

export default Header
