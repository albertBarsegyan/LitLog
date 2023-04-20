import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import { firebaseAuth, firestoreApp } from '../libs/firebase/firebase.config';
import { doc, setDoc } from '@firebase/firestore';
import { FirebaseDocument } from '../constants/firebase.constants';
import { UrlConstants } from '../constants/url.constants';

export const registerService = async ({ email, password, firstname, lastname }) => {
  try {
    const newUserCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);

    const userDocumentReference = doc(firestoreApp, FirebaseDocument.Users, newUserCredential.user.uid);

    await setDoc(userDocumentReference, { email, firstname, lastname });

    await sendEmailVerification(newUserCredential.user, {
      url: UrlConstants.FirebaseRedirect,
      handleCodeInApp: true,
    });

    return { data: newUserCredential, errorCode: null, errorMessage: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { data: null, errorCode, errorMessage };
  }
};

export const loginService = async ({ email, password }) => {
  try {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { data: null, errorCode, errorMessage };
  }
};

export const googleAuthService = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await firebaseAuth.signInWithPopup(provider);
    const { displayName, email, uid } = result.user;

    const userDoc = await firestoreApp.collection(FirebaseDocument.Users).doc(uid).get();

    if (userDoc.exists) {
      return { data: result.user, errorCode: null, errorMessage: null };
    } else {
      await firestoreApp.collection(FirebaseDocument.Users).doc(uid).set({
        displayName,
        email,
        createdAt: new Date(),
      });

      return { data: result.user, errorCode: null, errorMessage: null };
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { data: null, errorCode, errorMessage };
  }
};
