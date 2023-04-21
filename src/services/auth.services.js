import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@firebase/auth';
import { firebaseAuth, firestoreApp } from '../libs/firebase/firebase.config';
import { collection, doc, getDoc, setDoc } from '@firebase/firestore';
import { FirebaseDocument } from '../constants/firebase.constants';
import { UrlConstants } from '../constants/url.constants';
import { getAuth } from 'firebase/auth';
import { firebaseUserDataFilter } from '../utils/firebase.utils';

export const registerService = async ({ email, password, firstname, lastname }) => {
  try {
    const newUserCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);

    const userDocumentReference = doc(firestoreApp, FirebaseDocument.Users, newUserCredential.user.uid);

    await setDoc(userDocumentReference, { email, firstname, lastname });
    await sendEmailVerification(getAuth().currentUser, {
      url: UrlConstants.FirebaseRedirect,
      handleCodeInApp: true,
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
export const googleAuthService = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(getAuth(), provider);

    const { displayName, email, uid } = result.user;

    const userDoc = await getDoc(doc(collection(firestoreApp, 'users'), uid));

    if (userDoc.exists()) {
      return { data: firebaseUserDataFilter(result.user), errorCode: null, errorMessage: null };
    } else {
      await setDoc(doc(collection(firestoreApp, 'users'), uid), {
        displayName,
        email,
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
