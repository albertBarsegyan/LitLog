import style from './header.module.css'
import logo from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import { AuthenticatedRoutePath } from '../../constants/RouteCostant'

function Header() {
  return (
    <header>
      <Link to={AuthenticatedRoutePath.Login()}>
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
    </header>
  )
}
export default Header
