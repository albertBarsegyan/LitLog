import { Routes, Route } from 'react-router-dom'
import ProfilPage from '../components/ProfilPage/ProfilPage'
import { useAuth } from '../context/auth.context'
import { RouteConstant } from '../constants/RouteCostant'
import Book from '../components/ProfilPage/Book/Book'
import FriendsPage from '../components/ProfilPage/FrindsPage/FriendsPage'
import BookCount from '../components/BookCount/BookCount'

function AuthenticatedApp() {
  const { user } = useAuth()

  return (
    <>
      <div>
        <span>{user.uid}</span>
      </div>
      <Routes>
        <Route path="/bookcount" element={<BookCount />} />
        <Route path={RouteConstant.ProfilPage} element={<ProfilPage />} />
        <Route path={RouteConstant.BookPage} element={<Book />} />
        <Route path={RouteConstant.FriendPage} element={<FriendsPage />} />
      </Routes>
    </>
  )
}

export default AuthenticatedApp
