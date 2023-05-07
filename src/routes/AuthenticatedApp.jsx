import ProfilPage from '../components/ProfilPage/ProfilPage';
import { useAuth } from '../context/auth.context';

function AuthenticatedApp() {
    const { user, signOut } = useAuth();

    const handleClick = () => {
        signOut();
    };

    return (
        <ProfilPage />
    );
}

export default AuthenticatedApp