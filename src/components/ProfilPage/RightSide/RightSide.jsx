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
      <div className={style.container}>
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
              src={user?.photoURl}
              alt=""
            />
          </div>
        </div>
      </div>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
    </>
  )
}

export default RightSide
