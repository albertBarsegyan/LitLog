import { FirstPage } from './components/FirstPage/FirstPage';
import { Registration } from './components/Registration/Registration';
import { useAuth } from './context/auth.context';

function App() {
  // const { googleAuth, isLoading, user, signOut, error, signIn, signUp } = useAuth();

  // const handleGoogleAuth = () => googleAuth();

  // const handleSignOut = () => signOut();

  // const handleLogin = () => signIn({ email: 'albertbarsegyan6@gmail.com', password: 'ajdkfjaksjdkjf' });

  // const handleSignUp = () =>
  //   signUp({
  //     email: 'test2000@mailinator.com',
  //     password: 'ajdkfjaksjdkjf',
  //     firstname: 'Micki',
  //     lastname: 'jimmiy',
  //   });

  return (
    <div className="App">
      {/* <p>code = {error.code}</p>
      <p>message = {error.message}</p>
      <pre>user = {JSON.stringify(user, null, 2)}</pre>
      <span>{isLoading ? 'loading' : 'not loading'}</span>
      <button onClick={handleGoogleAuth}>Google</button>
      <button onClick={handleSignOut}>Sign out</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign up</button> */}
      {/* <Registration /> */}
      <FirstPage />
    </div>
  );
}

export default App;
