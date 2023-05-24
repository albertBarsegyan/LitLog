import style from './profil.module.css'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import CenterSite from './CenterSite/CenterSite'
import PopUp from './Modal/PopUp'
import NavBar from './RightSide/NavBar/Navbar'
import FriendsPage from './FrindsPage/FriendsPage'
// import FriendsPage from './FrindsPage/FriendsPage'

const ProfilPage = () => {
  return (
    <div className={style.side}>
      <div>
        <LeftSide />
      </div>
      <div></div>
      <div>
        <RightSide />
        <CenterSite />
        {/* <FriendsPage /> */}
        {/* <Books /> */}
      </div>
      <PopUp />
      {/* <NavBar /> */}
    </div>
  )
}
export default ProfilPage
