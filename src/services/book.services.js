import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { firestoreApp } from '../libs/firebase/firebase.config'
import { FirebaseDocument } from '../constants/firebase.constants'
import { generateUuid } from '../utils/string.utils'

export const addBook = async ({ headline, author, genre, url }, userUid) => {
  const documentUuid = generateUuid(16)

  try {
    await setDoc(doc(firestoreApp, FirebaseDocument.Books, documentUuid), {
      headline,
      author,
      genre,
      url,
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
