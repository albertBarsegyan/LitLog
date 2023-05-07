import './friends.module.css'
import { useAuth } from '../../../context/auth.context'

const FriendsPage = () => {
  const { user } = useAuth()

  const x = user.displayName.split(' ')
  console.log(x[0])
  console.log(x[1])
  return (
    <div>
      <p>My friends</p>
      <div>
        {/* {users.map((item) => {
                    return (
                        <div key={item.uid}>
                            <p>{item.displayName}</p>
                        </div>
                    );
                })} */}
      </div>
    </div>
  )
}

export default FriendsPage
