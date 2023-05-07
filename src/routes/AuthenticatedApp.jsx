import ProfilPage from "../components/ProfilPage/ProfilPage";
import { useAuth } from "../context/auth.context";

function AuthenticatedApp() {
  const { user, signOut } = useAuth();

  return (
    <>
      <div>
        <span style={{ color: "pink" }}>{user.uid}</span>
      </div>
      <button onClick={() => signOut()}>Log Out</button>

      <span>{user?.displayName}</span>
      <ProfilPage />
    </>
  );
}

export default AuthenticatedApp;
