import { createBrowserRouter, Navigate } from 'react-router-dom'
import { UnauthenticatedRoutePath } from '../constants/RouteCostant'
import LoginPage from '../components/LoginPage/LoginPage'
import { Registration } from '../components/Registration/Registration'

export const UnauthenticatedRoutes = createBrowserRouter([
  {
    path: UnauthenticatedRoutePath.Login(),
    element: <LoginPage />,
    errorElement: <div>Error happened</div>,
    loader: () => <div>Loading</div>,
  },
  {
    path: UnauthenticatedRoutePath.Registration(),
    element: <Registration />,
    errorElement: <div>Error happened</div>,
    loader: () => <div>Loading</div>,
  },
  {
    path: UnauthenticatedRoutePath.Navigate(),
    element: <Navigate to={UnauthenticatedRoutePath.Login()} />,
    errorElement: <div>Error happened</div>,
    loader: () => <div>Loading</div>,
  },
])
