import { Route, Routes } from 'react-router-dom'
import { FirstPage } from './components/FirstPage/FirstPage'
import LoginPage from './components/LoginPage/LoginPage'
import { Registration } from './components/Registration/Registration'
import { signInWithGoogle } from './services/auth.services'
import { RouteConstant } from './constants/RouteCostant'
import ProfilPage from './components/ProfilPage/ProfilPage'


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
      
      {/* <LoginPage /> */}
      {/* <Registration /> */}
      {/* <Icons singOut={Icon.singOut} /> */}

      {/* <LeftSide /> */}
      <ProfilPage/>

    </div>
  )
}

export default App
