import { Route, Routes } from 'react-router-dom'
import { FirstPage } from './components/FirstPage/FirstPage'
import LoginPage from './components/LoginPage/LoginPage'
import { Registration } from './components/Registration/Registration'
import { signInWithGoogle } from './services/auth.services'
import { RouteConstant } from './constants/RouteCostant'
import Icons from './assets/images/icons/Icons'
import LeftSide from './components/PrifilPage/LeftSide/LeftSide'


function App() {

  const handleClick = () => {
    signInWithGoogle().then(console.log)
  }


  return (
    <div className="App">
     

      {/* <FirstPage/> */}
      {/* <Routes>
        <Route path={RouteConstant.FirstPage} exact element={<FirstPage/>}/>
        <Route path={RouteConstant.LoginPage} element={<LoginPage />} />
        <Route path={RouteConstant.RegPage} element={<Registration />} />
      </Routes> */}
      <LeftSide/>
      {/* <LoginPage /> */}
      {/* <Registration /> */}
    </div>
  )
}

export default App
