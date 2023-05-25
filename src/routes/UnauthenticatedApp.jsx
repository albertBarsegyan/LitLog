import { Route, Routes } from 'react-router-dom'
import { RouteConstant } from '../constants/RouteCostant'
import { FirstPage } from '../components/FirstPage/FirstPage'
import LoginPage from '../components/LoginPage/LoginPage'
import { Registration } from '../components/Registration/Registration'
import ProfilPage from '../components/ProfilPage/ProfilPage'
import Books from '../components/Books/Books'
function UnauthenticatedApp() {
  return (
    <>
      <Routes>
        <Route path={RouteConstant.FirstPage} exact element={<FirstPage />} />
        {/* <Route path={RouteConstant.ProfilPage} element={<ProfilPage />} /> */}
        <Route path={RouteConstant.LoginPage} element={<LoginPage />} />
        <Route path={RouteConstant.RegPage} element={<Registration />} />
      </Routes>
    </>
  )
}
export default UnauthenticatedApp
