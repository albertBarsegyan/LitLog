import { Link } from 'react-router-dom'
import Icons from '../../assets/images/icons/Icons'
import { Icon } from '../../constants/PropsIcon'
import style from './footer.module.css'

function Footer() {
  return (
    <footer>
      <p className={style.logo}>LitLog</p>
      <p className={style.copyRight}>
        &copy; All Rights Reserved from K.A.S.A.
      </p>
      <div className={style.socialMedia}>
        <Link
          to="https://www.instagram.com/sargsyan_s._/"
          className={style.instagram}
          target="blanck"
        >
          <Icons instagram={Icon.instagram} />
        </Link>
        <Link
          to="https://www.instagram.com/arm_stepanyan.7.7.7/"
          className={style.instagram}
          target="blanck"
        >
          <Icons instagram={Icon.instagram} />
        </Link>
        <Link
          to="https://www.instagram.com/7_7_7_avetisyan7_7_7_/"
          className={style.instagram}
          target="blanck"
        >
          <Icons instagram={Icon.instagram} />
        </Link>
        <Link
          to="https://www.instagram.com/karen.palyan.94/"
          className={style.instagram}
          target="blanck"
        >
          <Icons instagram={Icon.instagram} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
