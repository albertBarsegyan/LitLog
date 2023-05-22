import style from './friends.module.css'
import { userAuth } from '../../../context/auth.context'
import friends from '../../../constants/friends'

const FriendsPage = () => {
    return (
        <div>
            {friends.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsPage
