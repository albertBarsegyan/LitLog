import {
  createUserWithEmailAndPassword,
<<<<<<< HEAD
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from '@firebase/auth';
import { firebaseAuth, firestoreApp } from '../libs/firebase/firebase.config';
import { collection, doc, getDoc, setDoc } from '@firebase/firestore';
import { FirebaseDocument } from '../constants/firebase.constants';
import { firebaseUserDataFilter } from '../utils/firebase.utils';

export const registerService = async ({ email, password, firstname, lastname }) => {
  try {
    const newUserCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);

    const user = getAuth().currentUser;

    await updateProfile(user, {
      displayName: `${firstname} ${lastname}`,
    });

    const userDocumentReference = doc(firestoreApp, FirebaseDocument.Users, newUserCredential.user.uid);
    await setDoc(userDocumentReference, {
      email,
      displayName: `${firstname} ${lastname}`,
      emailVerified: false,
      photoURL: null,
    });

    return { data: firebaseUserDataFilter(newUserCredential.user), errorCode: null, errorMessage: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { data: null, errorCode, errorMessage };
  }
};

export const loginService = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return { data: firebaseUserDataFilter(response.user), errorCode: null, errorMessage: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { data: null, errorCode, errorMessage };
  }
};
=======
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

export const registerService = ({email, password}) => {
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

            return {data: null, errorCode, errorMessage}
          })
      }

      return {data: user, errorMessage: null, errorCode: null}
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      return {data: null, errorCode, errorMessage}

    })
}
>>>>>>> newBranch

export const signOutService = async () => {
  try {
    await firebaseAuth.signOut();
    return { data: null, errorCode: null, errorMessage: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { data: null, errorCode, errorMessage };
  }
};

<<<<<<< HEAD
export const googleAuthService = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(getAuth(), provider);

    const { displayName, email, uid, emailVerified, photoURL } = result.user;
=======
export const signInWithGoogle = () => {
  return signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      return {data: result.user, errorCode: null, errorMessage: null}
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);

      return {data: null, errorCode, errorMessage}
    });
>>>>>>> newBranch

    const userDoc = await getDoc(doc(collection(firestoreApp, FirebaseDocument.Users), uid));

<<<<<<< HEAD
    if (userDoc.exists()) {
      return { data: firebaseUserDataFilter(result.user), errorCode: null, errorMessage: null };
    } else {
      await setDoc(doc(collection(firestoreApp, FirebaseDocument.Users), uid), {
        displayName,
        email,
        emailVerified,
        photoURL,
        createdAt: new Date(),
      });

      return { data: firebaseUserDataFilter(result.user), errorCode: null, errorMessage: null };
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { data: null, errorCode, errorMessage };
  }
};
=======
}
>>>>>>> newBranch
