import { createContext, useContext, useEffect, useState } from 'react'
import {
  editUserService,
  googleAuthService,
  loginService,
  registerService,
  signOutService,
} from '../services/auth.services'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth, firestoreApp } from '../libs/firebase/firebase.config'
import { firebaseUserDataFilter } from '../utils/firebase.utils'
import { renameFile } from '../utils/file.utils'
import { collection, doc, getDoc } from 'firebase/firestore'
import { FirebaseDocument } from '../constants/firebase.constants'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState({ message: null, code: null })
  const [isLoading, setIsLoading] = useState(true)

  const signUp = async ({ email, password, firstname, lastname }) => {
    const { errorMessage, errorCode, data } = await registerService({
      email,
      password,
      firstname,
      lastname,
    })
    setUser(data)
    setIsLoading(false)
    setError({
      code: errorCode,
      message: errorMessage,
    })
  }

  const signIn = async ({ email, password }) => {
    const { errorMessage, data, errorCode } = await loginService({
      email,
      password,
    })
    setUser(data || null)
    setIsLoading(false)
    setError({
      code: errorCode || null,
      message: errorMessage || null,
    })
  }

  const signOut = async () => {
    const { errorMessage, errorCode } = await signOutService()
    setIsLoading(false)
    setError({
      code: errorCode || null,
      message: errorMessage || null,
    })

    setUser((prev) => {
      return errorMessage ? prev : null
    })
  }

  const googleAuth = async () => {
    const { errorMessage, errorCode, data } = await googleAuthService()
    setUser(data || null)

    setIsLoading(false)
    setError({
      code: errorCode || null,
      message: errorMessage || null,
    })
  }

  const editUser = async ({ fullName, profilePhotoFile, booksCount }) => {
    const { uid } = user

    const { errorMessage, errorCode, data } = await editUserService({
      fullName,
      profilePhotoFile: renameFile({ file: profilePhotoFile, fileName: uid }),
      booksCount,
    })

    setUser((prev) => data || prev)

    setIsLoading(false)
    setError({
      code: errorCode,
      message: errorMessage,
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const userDoc = await getDoc(
          doc(collection(firestoreApp, FirebaseDocument.Users), user.uid)
        )

        setUser(firebaseUserDataFilter(user, userDoc.data()))
      }

      setIsLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        editUser,
        signIn,
        signUp,
        signOut,
        isLoading,
        googleAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// useAuth will return { user, errorMessage, signIn, signUp, isLoading, googleAuth }
export const useAuth = () => useContext(AuthContext)
