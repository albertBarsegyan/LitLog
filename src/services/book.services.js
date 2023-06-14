import {
  collection,
  doc,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore'
import { firestoreApp } from '../libs/firebase/firebase.config'
import { FirebaseDocument } from '../constants/firebase.constants'
import { generateUuid } from '../utils/string.utils'

export const addBook = async (
  { headline, author, genre, url, readingStatus },
  userUid
) => {
  const documentUuid = generateUuid(16)

  try {
    await setDoc(doc(firestoreApp, FirebaseDocument.Books, documentUuid), {
      id: documentUuid,
      headline,
      author,
      genre,
      url,
      readingStatus,
      ownerUid: userUid,
      createdAt: serverTimestamp(),
    })

    return { data: null, errorCode: null, errorMessage: null }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}

export const getBooks = (uid) => {
  try {
    const booksRef = collection(firestoreApp, FirebaseDocument.Books)

    const queryResult = query(booksRef, where('ownerUid', '==', uid))

    return { data: queryResult, errorCode: null, errorMessage: null }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}
