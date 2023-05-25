import { Routes, Route } from 'react-router-dom'
import ProfilPage from '../components/ProfilPage/ProfilPage'
import { useAuth } from '../context/auth.context'
import { RouteConstant } from '../constants/RouteCostant'
import Book from '../components/Book/Book'
import FriendsPage from '../components/ProfilPage/FrindsPage/FriendsPage'

function AuthenticatedApp() {
  const { user } = useAuth()

  // console.log(user.uid);

  return (
    <>
      {/* <div>
        <span>{user.uid}</span>
      </div> */}

      <Routes>
        <Route path={RouteConstant.ProfilPage} element={<ProfilPage />} />
        <Route path={RouteConstant.BookPage} element={<Book />} />
        <Route path={RouteConstant.FriendPage} element={<FriendsPage />} />
      </Routes>
      {/* <ProfilPage /> */}
    </>
  )
}

export default AuthenticatedApp
