import ProfilPage from '../components/ProfilPage/ProfilPage'
import { useAuth } from '../context/auth.context'

function AuthenticatedApp() {
  const { user } = useAuth()

  // console.log(user.uid);

  return (
    <>
      <div>
        <span>{user.uid}</span>
      </div>
      <ProfilPage />
    </>
  )
}

export default AuthenticatedApp
