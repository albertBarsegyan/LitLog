import { Route, Routes } from 'react-router-dom'
import { FirstPage } from './components/FirstPage/FirstPage'
import LoginPage from './components/LoginPage/LoginPage'
import { Registration } from './components/Registration/Registration'
import { signInWithGoogle } from './services/auth.services'
import { RouteConstant } from './constants/RouteCostant'


function App() {

  const handleClick = () => {
    signInWithGoogle().then(console.log)
  }


  return (
    <div className="App">
<<<<<<< HEAD
=======
      {/* <Routes>
        <Route/>
      </Routes> */}

>>>>>>> 8e473351cc63e527e0b2b700df4ea5e10390303f
      {/* <FirstPage/> */}
      <Routes>
        <Route path={RouteConstant.FirstPage} exact element={<FirstPage/>}/>
        <Route path={RouteConstant.LoginPage} element={<LoginPage />} />
        <Route path={RouteConstant.RegPage} element={<Registration />} />
      </Routes>
      {/* <LoginPage /> */}
      {/* <Registration /> */}
<<<<<<< HEAD
      <FirstPage/>
      
=======
>>>>>>> 8e473351cc63e527e0b2b700df4ea5e10390303f
    </div>
  )
}

export default App
