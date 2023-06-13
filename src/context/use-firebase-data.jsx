import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { firestoreApp } from '../libs/firebase/firebase.config'

export function useFirebaseData({ collectionName, queryArray }) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const collectionRef = collection(firestoreApp, collectionName)
    let queryResult
    if (queryArray) {
      queryResult = query(collectionRef, where(...queryArray))
    }

    const unsubscribe = onSnapshot(
      queryArray ? queryResult : collectionRef,
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
  }, [collectionName, queryArray])

  return {
    data,
    error,
  }
}
