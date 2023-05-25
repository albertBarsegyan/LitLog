import { Routes, Route } from 'react-router-dom'
import ProfilPage from '../components/ProfilPage/ProfilPage'
import { useAuth } from '../context/auth.context'
import { RouteConstant } from '../constants/RouteCostant'
import Books from '../components/Books/Books'
import FriendsPage from '../components/ProfilPage/FrindsPage/FriendsPage'
import LeftSide from '../components/ProfilPage/LeftSide/LeftSide'
import RightSide from '../components/ProfilPage/RightSide/RightSide'

function AuthenticatedApp() {
  const { user } = useAuth()

  // console.log(user.uid);

  return (
    <>
      <div>
        <span>{user.uid}</span>
      </div>

      <Routes>
        <Route path={RouteConstant.ProfilPage} element={<ProfilPage />} />
        <Route path={RouteConstant.BookPage} element={<Books />} />
        <Route path={RouteConstant.FriendPage} element={<FriendsPage />} />
      </Routes>
      {/* <ProfilPage /> */}
    </>
  )
}

export default AuthenticatedApp
