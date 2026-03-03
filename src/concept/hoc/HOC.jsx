import React from 'react'
import Bike from './Bike'
import PetrolPump from './PetrolPump'
//!it will take another compoment as a argument and return a another component with adding some extra features
const HOC = () => {
  return (
    <div>
      <PetrolPump>
        <Bike name="GT650"/>
      </PetrolPump>
      <PetrolPump>
        <Bike name="splender +"/>
      </PetrolPump>
      
    </div>
  )
}

export default HOC