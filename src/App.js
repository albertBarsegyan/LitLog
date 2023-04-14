import { signInWithGoogle } from './services/auth.services'

function App() {

  const handleClick = () => {
    signInWithGoogle().then(console.log)
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Auth</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
