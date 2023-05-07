import { createContext, useContext, useState } from 'react'

export const PopUpContext = createContext(null)

export const PopUpProvider = ({ children }) => {
  const [modaleActive, setModaleActive] = useState(false)
  const [modeActive, setModeActive] = useState(false)

  return (
    <PopUpContext.Provider
      value={{ modaleActive, setModaleActive, modeActive, setModeActive }}
    >
      {children}
    </PopUpContext.Provider>
  )
}

export const usePopUp = () => useContext(PopUpContext)
export const useModal = () => useContext(PopUpContext)
