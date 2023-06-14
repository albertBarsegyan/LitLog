import style from './navbar.module.css'
import { Icon } from '../../../../constants/PropsIcon'
import Icons from '../../../../assets/images/icons/Icons'
import { usePopUp } from '../../../../context/popup'
import { useAuth } from '../../../../context/auth.context'
import { useRef } from 'react'
import { AuthenticatedRoutePath } from '../../../../constants/RouteCostant'
import { useOutsideClick } from '../../../../hooks/outside-click-hook'

const Navbar = ({ openNav }) => {
  const { signOut } = useAuth()
  const { setModalActive } = usePopUp()
  const navbarRef = useRef(null)

  const handleOutSubmit = () => signOut()

  useOutsideClick(navbarRef, () => setModalActive(false))

  return (
    <div className={openNav ? style.open : style.close} ref={navbarRef}>
      <a
        href={AuthenticatedRoutePath.EditProfile()}
        style={{ marginBottom: 15 }}
        className={style.btn}
      >
        <Icons setting={Icon.setting} />
        <span style={{ paddingLeft: 10 }}>Settings</span>
      </a>

      <button onClick={handleOutSubmit} className={style.btn}>
        <Icons singOut={Icon.singOut} />
        <span style={{ paddingLeft: 10 }}>Log Out</span>
      </button>
    </div>
  )
}

export default Navbar
