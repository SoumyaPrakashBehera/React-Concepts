import React from 'react'
import C1 from './C1'
//! from the top most component to the inner most component we use props drilling.
//?context api--to prevent props drilling.
const PropsDrilling = () => {
  const data={
    username:"Deb Prakash",
    message:"i Hate you"
  }
  return (
    <div>
      <C1 data={data}/>
    </div>
  )
}

export default PropsDrilling 