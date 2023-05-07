import { useAuth } from './context/auth.context'
import AuthenticatedApp from './routes/AuthenticatedApp'
import UnauthenticatedApp from './routes/UnauthenticatedApp'

function App() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!user) {
    return <UnauthenticatedApp />
  }

  return <AuthenticatedApp />
}

export default App
