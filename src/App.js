import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import { RouteConstant } from './constants/RouteCostant';
import { signInWithGoogle } from './services/auth.services';
import { FirstPage } from './components/FirstPage/FirstPage';
import { Registration } from './components/Registration/Registration';

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
      {/* <Routes>
        <Route/>
      </Routes> */}

      {/* <FirstPage/> */}
      <Routes>
        <Route path={RouteConstant.FirstPage} exact element={<FirstPage />} />
        <Route path={RouteConstant.LoginPage} element={<LoginPage />} />
        <Route path={RouteConstant.RegPage} element={<Registration />} />
      </Routes>
      {/* <LoginPage /> */}
      {/* <Registration /> */}
    </div>
  );
}

export default App;
