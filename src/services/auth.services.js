import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import {
  firebaseAuth,
  firebaseCloudStorage,
  firestoreApp,
} from '../libs/firebase/firebase.config'
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import {
  FirebaseCloudStorages,
  FirebaseDocument,
} from '../constants/firebase.constants'
import {
  firebaseUserDataFilter,
  getStoragePathFromDownloadUrl,
} from '../utils/firebase.utils'
import {
  deleteObject,
  getDownloadURL,
  getMetadata,
  ref,
  uploadBytes,
} from 'firebase/storage'

export const registerService = async ({
  email,
  password,
  firstname,
  lastname,
}) => {
  try {
    const newUserCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    const user = getAuth().currentUser

    await updateProfile(user, {
      displayName: `${firstname} ${lastname}`,
    })

    const userDocumentReference = doc(
      firestoreApp,
      FirebaseDocument.Users,
      newUserCredential.user.uid
    )

    await setDoc(userDocumentReference, {
      email,
      displayName: `${firstname} ${lastname}`,
      emailVerified: false,
      booksCount: 0,
      photoURL: null,
    })

    return {
      data: firebaseUserDataFilter(newUserCredential.user),
      errorCode: null,
      errorMessage: null,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}

export const loginService = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    const userDoc = await getDoc(
      doc(collection(firestoreApp, FirebaseDocument.Users), response.user.uid)
    )

    return {
      data: firebaseUserDataFilter(response.user, userDoc.data()),
      errorCode: null,
      errorMessage: null,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}

export const signOutService = async () => {
  try {
    await firebaseAuth.signOut()
    return { data: null, errorCode: null, errorMessage: null }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}

export const googleAuthService = async () => {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(getAuth(), provider)

    const { displayName, email, uid, emailVerified, photoURL } = result.user

    const userDoc = await getDoc(
      doc(collection(firestoreApp, FirebaseDocument.Users), uid)
    )

    if (userDoc.exists()) {
      return {
        data: firebaseUserDataFilter(result.user, userDoc.data()),
        errorCode: null,
        errorMessage: null,
      }
    } else {
      await setDoc(doc(collection(firestoreApp, FirebaseDocument.Users), uid), {
        displayName,
        email,
        emailVerified,
        photoURL,
        createdAt: new Date(),
      })

      return {
        data: firebaseUserDataFilter(result.user),
        errorCode: null,
        errorMessage: null,
      }
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}

export const editUserService = async ({
  fullName,
  profilePhotoFile,
  booksCount,
}) => {
  try {
    const user = getAuth().currentUser

    const userDocumentReference = doc(
      firestoreApp,
      FirebaseDocument.Users,
      user.uid
    )

    if (booksCount) {
      await updateDoc(userDocumentReference, {
        booksCount,
      })
    }

    if (fullName) {
      await updateProfile(user, {
        displayName: fullName,
      })

      await updateDoc(userDocumentReference, {
        displayName: fullName,
      })
    }

    if (profilePhotoFile) {
      const oldProfilePictureStoragePath = getStoragePathFromDownloadUrl(
        user.photoURL
      )

      if (oldProfilePictureStoragePath) {
        const oldProfilePictureStorageRef = ref(
          firebaseCloudStorage,
          oldProfilePictureStoragePath
        )

        const imageMetadata = await getMetadata(oldProfilePictureStorageRef)
        imageMetadata && (await deleteObject(oldProfilePictureStorageRef))
      }

      const storageRef = ref(
        firebaseCloudStorage,
        `${FirebaseCloudStorages.ProfileImage}/${profilePhotoFile.name}`
      )

      await uploadBytes(storageRef, profilePhotoFile)
      let uploadedFileUrl

      try {
        uploadedFileUrl = await getDownloadURL(storageRef)
      } catch (e) {
        uploadedFileUrl = null
      }
      await updateProfile(user, {
        photoURL: uploadedFileUrl,
      })

      await updateDoc(userDocumentReference, {
        photoURL: uploadedFileUrl,
      })
    }

    const updatedUser = getAuth().currentUser

    const userDocument = (await getDoc(userDocumentReference)).data()

    return {
      data: firebaseUserDataFilter(updatedUser, userDocument),
      errorCode: null,
      errorMessage: null,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}
