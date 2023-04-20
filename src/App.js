import { useAuth } from './context/auth.context';
import { Registration } from './components/Registration/Registration';

function App() {
  const { googleAuth, isLoading, user } = useAuth();
  const handleGoogleAuth = () => googleAuth();
  return (
    <div className="App">
      <p> {JSON.stringify(user)}</p>
      <span>{isLoading ? 'loading' : 'not loading'}</span>
      <button onClick={handleGoogleAuth}>Google</button>
      <Registration />
    </div>
  );
}

export default App;
