import CenterSite from '../CenterSite/CenterSite'
import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'
import style from './friends.module.css'

const FriendsPage = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.bar}>
        <LeftSide />
      </div>
      <div className={style.bar}>
        <RightSide />
      </div>
      jhmgfdghjhgf
    </div>
  )
}

export default FriendsPage
