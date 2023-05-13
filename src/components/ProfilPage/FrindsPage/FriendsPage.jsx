import './friends.module.css'
import { useAuth } from '../../../context/auth.context'
import friends from "../../../constants/friends"
const FriendsPage = () => {
  const { user } = useAuth()

  const x = user?.displayName.split(' ')
  // console.log(x[0])
  // console.log(x[1])
  return (
    <div>
      <p>My friends</p>
      <div>
        {friends.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              {/* <img src={item.img} alt="images" /> */}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default FriendsPage
