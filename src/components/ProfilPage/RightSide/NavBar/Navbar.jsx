import { useState } from 'react'
import style from './navbar.module.css'
const NavBar = () => {
  const [open, setOpen] = useState(false)
  const click = () => {
    setOpen(!open)
  }
  return (
    <div className={style.box}>
      <div className={style.dropdown}>
        <p onClick={click} className={style.Navigate}>
          Dropdown Menu
        </p>
        <ul className={open ? `${style.active}` : `${style.closeAndOpen}`}>
          <li className={style.li}>
            <a href="#">Hello</a>
          </li>
          <li className={style.li}>Menu</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
