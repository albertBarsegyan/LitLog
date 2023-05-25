import React from 'react'
import style from './navbar.module.css'
import { Icon } from '../../../../constants/PropsIcon'
import Icons from '../../../../assets/images/icons/Icons'
import { usePopUp } from '../../../../context/popup'
import { useAuth } from '../../../../context/auth.context'
import Button from '../../../Button/Button1/Button'

const Navbar = ({ openNav }) => {
  const { signOut } = useAuth()
  const { setModaleActive } = usePopUp()
  const handleOutSubmit = () => signOut()
  return (
    <div className={openNav ? `${style.open}` : `${style.close}`}>
      <button
        onClick={() => setModaleActive(true)}
        style={{ marginBottom: 15 }}
        className={style.btn}
      >
        <Icons setting={Icon.setting} />
        <span style={{ paddingLeft: 10 }}>Settings</span>
      </button>

      <button onClick={handleOutSubmit} className={style.btn}>
        <Icons singOut={Icon.singOut} />
        <span style={{ paddingLeft: 10 }}>Log Out</span>
      </button>
    </div>
  )
}

export default Navbar
