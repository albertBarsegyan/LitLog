import { FirstPage } from './components/FirstPage/FirstPage'
import LoginPage from './components/LoginPage/LoginPage'
import { Registration } from './components/Registration/Registration'
import { signInWithGoogle } from './services/auth.services'

function App() {

  const handleClick = () => {
    signInWithGoogle().then(console.log)
  }


  return (
    <div className="App">
      {/* <FirstPage/> */}
      <LoginPage />
      {/* <Registration/> */}
    </div>
  )
}

export default App
