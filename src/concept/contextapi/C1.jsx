import React, { useContext } from 'react'
import C2 from './C2'
import { GlobalContext } from './ContextApiConcept'

const C1 = () => {
  const res=useContext(GlobalContext)
  console.log(res);
  return (
    <div>
      <C2/>
    </div>
  )
}

export default C1