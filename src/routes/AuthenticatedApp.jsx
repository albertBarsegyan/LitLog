import ProfilPage from '../components/ProfilPage/ProfilPage';
import { useAuth } from '../context/auth.context';

function AuthenticatedApp() {
    const { user } = useAuth();

  

    return (
        <>
            <div>
                <span style={{color:"pink"}}>{user.uid}</span>
            </div>

            <ProfilPage />
        </>
    );
}

export default AuthenticatedApp