import style from './header.module.css'
import logo from '../../assets/images/logo.jpg'
import { NavLink } from 'react-router-dom'
import { AuthenticatedRoutePath } from '../../constants/RouteCostant'
import Icons from '../../assets/images/icons/Icons'
import { Icon } from '../../constants/PropsIcon'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div>
        <NavLink to={AuthenticatedRoutePath.FirstPage}>
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
    </header>
  )
}
export default Header
