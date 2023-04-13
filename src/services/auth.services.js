import { createUserWithEmailAndPassword, sendSignInLinkToEmail } from '@firebase/auth'
import { firebaseAuth } from '../libs/firebase/firebase.config'
import { UrlConstants } from '../constants/url.constants'
import { LocalStorageConstants } from '../constants/localStorage.constants'

const actionCodeSettings = {
  url: UrlConstants.FirebaseRedirect,
  handleCodeInApp: true,
}

export const registerService = ({ email, password }) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      if (user) {
        sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings)
          .then(() => {
            window.localStorage.setItem(LocalStorageConstants.E, email)
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            return { data: null, errorCode, errorMessage }
          })
      }

      return { data: user, errorMessage: null, errorCode: null }
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      return { data: null, errorCode, errorMessage }

    })
}
