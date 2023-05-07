import ProfilPage from '../components/ProfilPage/ProfilPage';
import { useAuth } from '../context/auth.context';

function AuthenticatedApp() {
    const { user, signOut } = useAuth();

    console.log(user.uid);

    return (
        <>
            <div>
                <span style={{color:"pink"}}>{user.uid}</span>
            </div>
            {/* <button onClick={()=> signOut()}>
                Log Out
            </button> */}
            <ProfilPage />
        </>
    );
}

export default AuthenticatedApp