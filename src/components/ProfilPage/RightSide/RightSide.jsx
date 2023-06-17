import { useAuth } from '../../../context/auth.context'
import style from '../RightSide/rightSide.module.css'
import Navbar from './NavBar/Navbar'
import { usePopUp } from '../../../context/popup'
import { ProfileIcon } from '../../icons/Profile.icon'

const RightSide = () => {
  const { user } = useAuth()
  const { setModalActive, modalActive } = usePopUp()

  const handleOpenDropDown = () => setModalActive((prev) => !prev)

  return (
    <div style={{ width: '100%' }}>
      <div className={style.rightDiv}>
        <div className={style.minDiv}>
          <button
            className={style.profileImageButton}
            onClick={handleOpenDropDown}
          >
            {user?.photoURL ? (
              <img
                className={style.userImg}
                src={user?.photoURL}
                alt="profile picture"
              />
            ) : (
              <ProfileIcon />
            )}
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            fill="white"
            className={
              modalActive ? `${style.rotate} ${style.active}` : style.rotate
            }
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </div>
      </div>

      {modalActive && <Navbar openNav={modalActive} />}
    </div>
  )
}

export default RightSide
