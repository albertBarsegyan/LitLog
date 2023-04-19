import LoginPage from './components/LoginPage/LoginPage'
import { signInWithGoogle } from './services/auth.services'

function App() {

  const handleClick = () => {
    signInWithGoogle().then(console.log)
  }


  return (
    <div className="App">
      <LoginPage />
    </div>
  )
}

export default App
