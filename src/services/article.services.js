import { generateUuid } from '../utils/string.utils'
import { doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { firestoreApp } from '../libs/firebase/firebase.config'
import { FirebaseDocument } from '../constants/firebase.constants'
import { filterObjectFields } from '../utils/object.utils'

export const addArticle = async ({ headline, author, url }, userUid) => {
  const documentUuid = generateUuid(16)

  try {
    await setDoc(doc(firestoreApp, FirebaseDocument.Articles, documentUuid), {
      headline,
      author,
      url,
      ownerUid: userUid,
      id: documentUuid,
      createdAt: serverTimestamp(),
    })

    return { data: null, errorCode: null, errorMessage: null }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}

export const editArticle = async ({ headline, author, url, id }) => {
  try {
    await updateDoc(
      doc(firestoreApp, FirebaseDocument.Articles, id),
      filterObjectFields({
        headline,
        author,
        url,
      })
    )

    return { data: null, errorCode: null, errorMessage: null }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return { data: null, errorCode, errorMessage }
  }
}
