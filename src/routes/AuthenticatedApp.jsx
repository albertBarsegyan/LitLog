import { createBrowserRouter, Navigate } from 'react-router-dom'
import { BookCount } from '../components/BookCount/BookCount'
import { AuthenticatedRoutePath } from '../constants/RouteCostant'
import BooksPage from '../components/ProfilPage/BooksPage/BooksPage'
import ArticlePage from '../components/ProfilPage/ArticelPage/ArticlePage'
import FriendsPage from '../components/ProfilPage/FrindsPage/FriendsPage'
import { EditProfile } from '../components/EditProfile/EditProfile'

export const AuthenticatedRoutes = createBrowserRouter([
  {
    path: AuthenticatedRoutePath.BooksInfo(),
    element: <BookCount />,
    errorElement: <div>Error happened</div>,
    loader: () => <div>Loading</div>,
  },
  {
    path: AuthenticatedRoutePath.Books(),
    element: <BooksPage />,
    errorElement: <div>Error happened</div>,
    loader: () => <div>Loading</div>,
  },
  {
    path: AuthenticatedRoutePath.Articles(),
    element: <ArticlePage />,
    errorElement: <div>Error happened</div>,
    loader: () => <div>Loading</div>,
  },
  {
    path: AuthenticatedRoutePath.EditProfile(),
    element: <EditProfile />,
    errorElement: <div>Error happened</div>,
    loader: () => <div>Loading</div>,
  },
  {
    path: AuthenticatedRoutePath.Friends(),
    element: <FriendsPage />,
    errorElement: <div>Error happened</div>,
    loader: () => <div>Loading</div>,
  },
  {
    path: AuthenticatedRoutePath.Navigate(),
    element: <Navigate to={AuthenticatedRoutePath.Books()} />,
  },
])
