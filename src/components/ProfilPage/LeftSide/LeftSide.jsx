import style from './leftSide.module.css'
import { Link, NavLink } from 'react-router-dom'
import Icons from '../../../assets/images/icons/Icons'
import { Icon } from '../../../constants/PropsIcon'
import { AuthenticatedRoutePath } from '../../../constants/RouteCostant'

const LeftSide = () => {
  return (
    <div className={style.leftSide}>
      <div className={style.header}>
        <Link to={AuthenticatedRoutePath.Books()} className={style.logo}>
          LitLog
        </Link>
      </div>
      <nav className={style.menu}>
        <NavLink
          to={AuthenticatedRoutePath.Books()}
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
        >
          <Icons book={Icon.book} />
          <span style={{ paddingLeft: 20 }}>Book</span>
        </NavLink>

        <NavLink
          to={AuthenticatedRoutePath.Articles()}
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
        >
          <Icons article={Icon.article} />

          <span style={{ paddingLeft: 20 }}>Article</span>
        </NavLink>

        <NavLink
          to={AuthenticatedRoutePath.Friends()}
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
