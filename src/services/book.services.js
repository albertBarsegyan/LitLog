import { doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { firestoreApp } from '../libs/firebase/firebase.config'
import { FirebaseDocument } from '../constants/firebase.constants'
import { generateUuid } from '../utils/string.utils'
import { filterObjectFields } from '../utils/object.utils'

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

export const editBook = async ({
  headline,
  author,
  genre,
  url,
  readingStatus,
  id,
}) => {
  try {
    await updateDoc(
      doc(firestoreApp, FirebaseDocument.Books, id),
      filterObjectFields({
        headline,
        author,
        genre,
        url,
        readingStatus,
      })
    )

    return { data: null, errorCode: null, errorMessage: null }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}
