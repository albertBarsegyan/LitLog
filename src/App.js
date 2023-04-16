import { Registration } from './components/Registration/Registration'
import { signInWithGoogle } from './services/auth.services'

function App() {

  const handleClick = () => {
    signInWithGoogle().then(console.log)
  }


  return (
    <div className="App">
    <Registration />
    </div>
  )
}

export default App
