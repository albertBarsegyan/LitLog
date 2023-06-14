import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { firestoreApp } from '../libs/firebase/firebase.config'

export function useFirebaseData({
  collectionName,
  queryArray,
  otherConditions,
}) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(firestoreApp, collectionName)
        let queryResult = collectionRef

        if (queryArray && otherConditions) {
          queryResult = query(
            collectionRef,
            where(...queryArray),
            where(...otherConditions)
          )
        }

        if (queryArray && !otherConditions) {
          queryResult = query(collectionRef, where(...queryArray))
        }

        const unsubscribe = onSnapshot(queryResult, (snapshot) => {
          const updatedData = snapshot.docs.map((doc) => doc.data())
          setData(updatedData)
          setError(null)
        })

        return () => unsubscribe()
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
  }, [collectionName, otherConditions, queryArray])

  return {
    data,
    error,
  }
}
