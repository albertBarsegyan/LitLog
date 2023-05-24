import style from './leftSide.module.css'
import { NavLink, Link } from 'react-router-dom'
import Icons from '../../../assets/images/icons/Icons'
import { Icon } from '../../../constants/PropsIcon'
import { RouteConstant } from '../../../constants/RouteCostant'

const LeftSide = () => {
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

          <span style={{ paddingLeft: 20 }}>Book</span>
        </NavLink>

        <NavLink
          to={RouteConstant.ArticlePage}
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
        >
          <Icons article={Icon.article} />

          <span style={{ paddingLeft: 20 }}>Article</span>
        </NavLink>

        <NavLink
          to={RouteConstant.FriendPage}
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
        >
          <Icons friends={Icon.friends} />

          <span style={{ paddingLeft: 20 }}>Friends</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default LeftSide
