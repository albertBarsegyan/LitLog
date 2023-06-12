import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { firestoreApp } from '../libs/firebase/firebase.config'

export function useFirebaseData({ collectionName }) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestoreApp, collectionName),
      (snapshot) => {
        const updatedData = snapshot.docs.map((doc) => doc.data())
        setData(updatedData)
        setError(null)
      },
      (error) => {
        setError(error)
      }
    )

    return () => unsubscribe()
  }, [collectionName])

  return {
    data,
    error,
  }
}
