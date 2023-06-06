import { useState } from 'react'
import Icons from '../../../assets/images/icons/Icons'
import { Icon } from '../../../constants/PropsIcon'
import { useAuth } from '../../../context/auth.context'
import style from '../RightSide/rightSide.module.css'
import Navbar from './NavBar/Navbar'

const RightSide = () => {
  const { user } = useAuth()
  const [openNav, setOpenNav] = useState(false)
  const handleOpenDropDown = () => setOpenNav(!openNav)

  return (
    <>
      <div className={style.rightDiv}>
        <div className={style.maxDiv}>
          <label className={style.labInp}>
            <input className={style.inpSearch} type="text" />
            <Icons search={Icon.search} />
          </label>
        </div>
        <div className={style.minDiv}>
          <img
            onClick={handleOpenDropDown}
            className={style.userImg}
            src={user?.photoURL}
            alt=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            fill="white"
            className={
              openNav ? `${style.rotate} ${style.active}` : style.rotate
            }
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </div>
      </div>
      {openNav && <Navbar openNav={openNav} setOpenNav={setOpenNav} />}
    </>
  )
}

export default RightSide
