import { useAuth } from '../context/auth.context';

function AuthenticatedApp() {
    const { user, signOut } = useAuth();

    const handleClick = () => {
        signOut();
    };

    return (
        <div>
            <div>
                <span>{user.uid}</span>
            </div>

            <button onClick={handleClick}>Logout</button>
        </div>
    );
}

export default AuthenticatedApp