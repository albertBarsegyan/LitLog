import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendSignInLinkToEmail,
    signInWithPopup
} from '@firebase/auth'
import { firebaseAuth } from '../libs/firebase/firebase.config'
import { UrlConstants } from '../constants/url.constants'
import { LocalStorageConstants } from '../constants/localStorage.constants'

const actionCodeSettings = {
    url: UrlConstants.FirebaseRedirect,
    handleCodeInApp: true,
}

const provider = new GoogleAuthProvider();

export const registerService = ({ email, password }) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            if (user) {
                return sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings)
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


export const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, provider)
        .then((result) => {
            return { data: result.user, errorCode: null, errorMessage: null }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);

            return { data: null, errorCode, errorMessage }
        });


}
