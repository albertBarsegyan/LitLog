import { Route, Routes } from 'react-router-dom'
import { RouteConstant } from '../constants/RouteCostant'
import { FirstPage } from '../components/FirstPage/FirstPage'
import LoginPage from '../components/LoginPage/LoginPage'
import { Registration } from '../components/Registration/Registration'
import { useAuth } from '../context/auth.context'

function UnauthenticatedApp() {
  const { user } = useAuth()
  return (
    <>
      <Routes>
        <Route path={RouteConstant.FirstPage} exact element={<FirstPage />} />
        <Route path={RouteConstant.LoginPage} element={<LoginPage />} />
        <Route path={RouteConstant.RegPage} element={<Registration />} />
      </Routes>
    </>
  )
}
export default UnauthenticatedApp
