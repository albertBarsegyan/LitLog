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
    </div>
  )
}

export default FriendsPage
