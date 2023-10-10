import React from 'react'
import { useState, createContext, useContext } from 'react'

export const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const GlobalContext = (props) => {
  const [appValue, setAppValue] = useState({ config: 'prod' })

  return (
    <AppContext.Provider value={{ appValue, setAppValue }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default GlobalContext
