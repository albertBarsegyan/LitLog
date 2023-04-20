import { createContext, useContext, useEffect, useState } from 'react';
import { googleAuthService, loginService, registerService } from '../services/auth.services';
import { onAuthStateChanged } from '@firebase/auth';
import { firebaseAuth } from '../libs/firebase/firebase.config';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const signUp = async ({ email, password, firstname, lastname }) => {
    const { errorMessage, data } = await registerService({ email, password });
    setUser(data || null);
    setErrorMessage(errorMessage || null);
    setIsLoading(false);
  };

  const signIn = async ({ email, password }) => {
    const { errorMessage, data } = await loginService({ email, password });
    setUser(data || null);
    setErrorMessage(errorMessage || null);
    setIsLoading(false);
  };

  const googleAuth = async () => {
    const { errorMessage, data } = await googleAuthService();
    setUser(data || null);
    setErrorMessage(errorMessage || null);
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      console.log({ user });
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, errorMessage, signIn, signUp, isLoading, googleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth will return { user, errorMessage, signIn, signUp, isLoading, googleAuth }
export const useAuth = () => useContext(AuthContext);
