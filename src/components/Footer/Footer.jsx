import style from './footer.module.css'
import { RouteConstant } from '../../constants/RouteCostant'
import HeaderButton from '../Button/Button2/HeaderButton'
import Icons from '../../assets/images/icons/Icons'
import { Icon } from '../../constants/PropsIcon'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div>
        <p className={style.copyRight}>
          &copy; All Rights Reserved from K.A.S.A.
        </p>
      </div>

      <div className={style.socialMedia}>
        <Link
          to="https://www.instagram.com/"
          target="blanck"
          className={style.socialMediaParagraph}
        >
          <Icons instagram={Icon.instagram} />
        </Link>
        <Link
          to="https://www.instagram.com/"
          target="blanck"
          className={style.socialMediaParagraph}
        >
          <Icons instagram={Icon.instagram} />
        </Link>
        <Link
          to="https://www.instagram.com/"
          target="blanck"
          className={style.socialMediaParagraph}
        >
          <Icons instagram={Icon.instagram} />
        </Link>
        <Link
          to="https://www.instagram.com/"
          target="blanck"
          className={style.socialMediaParagraph}
        >
          <Icons instagram={Icon.instagram} />
        </Link>
      </div>

      <div>
        <HeaderButton color={{ color: 'white' }} rout={RouteConstant.LoginPage}>
          Sign In
        </HeaderButton>
        <HeaderButton color={{ color: 'white' }} rout={RouteConstant.RegPage}>
          Sign Up
        </HeaderButton>
      </div>
    </footer>
  )
}

export default Footer
