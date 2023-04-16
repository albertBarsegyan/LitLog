import { FirstPage } from './components/FirstPage/FirstPage'
import { signInWithGoogle } from './services/auth.services'

function App() {

  const handleClick = () => {
    signInWithGoogle().then(console.log)
  }


  return (
    <div className="App">
      <FirstPage />
    </div>
  )
}

export default App
