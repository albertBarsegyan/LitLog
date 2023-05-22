import { useState } from 'react'
import Icons from '../../../assets/images/icons/Icons'
import { Icon } from '../../../constants/PropsIcon'
import { useAuth } from '../../../context/auth.context'
import { usePopUp } from '../../../context/popup'
import style from '../RightSide/rightSide.module.css'

const RightSide = () => {
  const { user, signOut } = useAuth()
  const { modaleActive, setModaleActive } = usePopUp()
  const [openNav, setOpenNav] = useState(false)
  const handleOpenDropDown = () => setOpenNav(!openNav)
  const handleOutSubmit = () => signOut()

  return (
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
      </div>
    </div>
  )
}

export default RightSide
