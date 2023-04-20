import { useAuth } from './context/auth.context';

function App() {
  const { googleAuth, isLoading, user, signOut, error, errorCode, signIn, signUp } = useAuth();
  const handleGoogleAuth = () => googleAuth();

  const handleSignOut = () => signOut();

  const handleLogin = () => signIn({ email: 'albertbarsegyan6@gmail.com', password: 'ajdkfjaksjdkjf' });

  const handleSignUp = () =>
    signUp({
      email: 'james@mail.ru',
      password: 'ajdkfjaksjdkjf',
      firstname: 'Micki',
      lastname: 'jimmiy',
    });

  return (
    <div className="App">
      <p>code=> {error.code}</p>
      <p>message=> {error.message}</p>
      <p>{errorCode}</p>
      <pre> {JSON.stringify(user, null, 2)}</pre>
      <span>{isLoading ? 'loading' : 'not loading'}</span>
      <button onClick={handleGoogleAuth}>Google</button>
      <button onClick={handleSignOut}>Sign out</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign up</button>
      {/*<Registration />*/}
    </div>
  );
}

export default App;
