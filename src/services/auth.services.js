import { createUserWithEmailAndPassword, sendEmailVerification } from '@firebase/auth'
import { firebaseAuth, firestoreApp } from '../libs/firebase/firebase.config'
import { doc, setDoc } from '@firebase/firestore'
import { FirebaseDocument } from '../constants/firebase.constants'
import { UrlConstants } from '../constants/url.constants'

export const registerService = async ({ email, password }) => {
  try {
    const newUserCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password)

    const userDocumentReference = doc(firestoreApp, FirebaseDocument.Users, newUserCredential.user.uid)

    await setDoc(userDocumentReference, { email })

    await sendEmailVerification(newUserCredential.user, {
      url: UrlConstants.FirebaseRedirect,
      handleCodeInApp: true,
    })

    return newUserCredential
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }

}
