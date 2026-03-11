import React, { createContext, useState } from 'react'

export const userContext=createContext("")
const GlobalContext = ({children}) => {
  const[currentUser,setCurrentUser]=useState(null)
  return (
    <userContext.Provider value={{currentUser,setCurrentUser}}>
      {children}
    </userContext.Provider>
  )
}

export default GlobalContext