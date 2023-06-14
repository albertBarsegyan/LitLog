import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'
import style from './friends.module.css'
import { useFirebaseData } from '../../../context/use-firebase-data'
import { FirebaseDocument } from '../../../constants/firebase.constants'
import profileImage from '../../../assets/images/loginUser.png'
import { useAuth } from '../../../context/auth.context'
import { EmptyState } from '../../icons/EmptyState'

const FriendRenderer = ({ data }) => {
  return (
    <div className={style.friendWrapper}>
      <img
        className={style.img}
        src={data.photoURL ?? profileImage}
        alt="img"
      />
      <p className={style.name}>{data.displayName}</p>
      <p className={style.email}>{data.email}</p>
    </div>
  )
}

const FriendsPage = () => {
  const { user } = useAuth()
  const { data: friends, error } = useFirebaseData({
    collectionName: FirebaseDocument.Users,
    queryArray: ['email', '!=', user.email],
  })

  return (
    <div className={style.mainDiv}>
      <div className={style.bar}>
        <LeftSide />
      </div>

      <div className={style.rightSideWrapper}>
        <RightSide />

        <div className={style.friendsWrapper}>
          {friends.map((friend) => (
            <FriendRenderer key={friend.id} data={friend} />
          ))}

          {!friends?.length && <EmptyState />}
        </div>
      </div>
    </div>
  )
}

export default FriendsPage
