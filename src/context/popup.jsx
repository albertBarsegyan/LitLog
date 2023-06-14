import { createContext, useContext, useState } from 'react'

export const PopUpContext = createContext(null)

export const PopUpProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <PopUpContext.Provider value={{ modalActive, setModalActive }}>
      {children}
    </PopUpContext.Provider>
  )
}

export const usePopUp = () => useContext(PopUpContext)
