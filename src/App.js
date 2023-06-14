import { useAuth } from './context/auth.context'
import { AuthenticatedRoutes } from './routes/AuthenticatedApp'
import { UnauthenticatedRoutes } from './routes/UnauthenticatedRoutes'
import { RouterProvider } from 'react-router-dom'

function App() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <RouterProvider
      router={user ? AuthenticatedRoutes : UnauthenticatedRoutes}
    />
  )
}

export default App
