import { createContext, useContext, useState } from 'react'

export const PopUpContext = createContext(null)

export const PopUpProvider = ({ children }) => {
  const [modaleActive, setModaleActive] = useState(false)

  return (
    <PopUpContext.Provider value={{ modaleActive, setModaleActive }}>
      {children}
    </PopUpContext.Provider>
  )
}

export const usePopUp = () => useContext(PopUpContext)
