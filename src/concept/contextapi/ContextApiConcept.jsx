import React, { createContext } from 'react'
import C1 from './C1'
import A1 from './A1'

export const GlobalContext=createContext()



const ContextApiConcept = () => {
  const data={
    username:"Soumya",
    message:"Hello I am under the water"
  }
  return (
    <div>
      <GlobalContext.Provider value={data}>
         <C1/>
         <A1/>
      </GlobalContext.Provider>
      
    </div>
  )
}

export default ContextApiConcept
