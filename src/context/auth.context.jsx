import { createContext, useContext, useEffect, useState } from 'react'
import { loginService, registerService } from '../services/auth.services'
import { GoogleAuthProvider, onAuthStateChanged } from '@firebase/auth'
import { firebaseAuth, firestoreApp } from '../libs/firebase/firebase.config'
import { FirebaseDocument } from '../constants/firebase.constants'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const signUp = async ({ email, password }) => {
    const { errorMessage, data } = await registerService({ email, password })
    setUser(data || null)
    setErrorMessage(errorMessage || null)
    setIsLoading(false)
  }

  const signIn = async ({ email, password }) => {
    const { errorMessage, data } = await loginService({ email, password })
    setUser(data || null)
    setErrorMessage(errorMessage || null)
    setIsLoading(false)
  }

  const authWithGoogle = async () => {
    try {

      const provider = new GoogleAuthProvider()
      const result = await firebaseAuth.signInWithPopup(provider)
      const { displayName, email, uid } = result.user

      const userDoc = await firestoreApp.collection(FirebaseDocument.Users).doc(uid).get()
      if (userDoc.exists) {
        return { data: result.user, errorCode: null, errorMessage: null }
      } else {

        const result = await firestoreApp.collection(FirebaseDocument.Users).doc(uid).set({
          displayName,
          email,
          createdAt: new Date()
        })

        return { data: result.user, errorCode: null, errorMessage: null }
      }
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      return { data: null, errorCode, errorMessage }
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        setUser(user)
        setIsLoading(false)
      } else {
        setIsLoading(false)
      }

    })

    return unsubscribe
  }, [])

  return <AuthContext.Provider
    value={{ user, errorMessage, signIn, signUp, isLoading, authWithGoogle }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

