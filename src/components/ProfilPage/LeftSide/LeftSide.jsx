import style from './leftSide.module.css'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Icons from '../../../assets/images/icons/Icons'
import { Icon } from '../../../constants/PropsIcon'
import { RouteConstant } from '../../../constants/RouteCostant'

import { usePopUp } from '../../../context/popup'
import { useAuth } from '../../../context/auth.context'

const LeftSide = () => {
  const { setModaleActive } = usePopUp(false)
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const handleOutSubmit = () => {
    signOut()
    navigate(RouteConstant.LoginPage)
  }
  return (
    <div className={style.leftSide}>
      <div className={style.header}>
        <Link to={RouteConstant.ProfilPage} className={style.logo}>
          LitLog
        </Link>
      </div>
      <nav className={style.menu}>
        <NavLink
          to={RouteConstant.BookPage}
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
        >

          <Icons book={Icon.book} />

          <span className={style.text}>Book</span>
        </NavLink>

        <NavLink
          to={RouteConstant.ArticlePage}
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
        >
          <Icons article={Icon.article} />

          <span className={style.text}>Article</span>
        </NavLink>

        <NavLink
          to={RouteConstant.FriendPage}
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
        >
          <Icons friends={Icon.friends} />

          <span className={style.text}>Friends</span>
        </NavLink>
      </nav>

      <div className={style.setings}>
        <button onClick={() => setModaleActive(true)} className={style.btn}>
          <Icons setting={Icon.setting} />
          <span className={style.text}>Settings</span>
        </button>

        <button onClick={handleOutSubmit} className={style.btn}>
          <Icons singOut={Icon.singOut} />
          <span className={style.text}>Log Out</span>
        </button>
      </div>
    </div>
  )
}

export default LeftSide
