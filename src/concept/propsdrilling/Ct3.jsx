import React from 'react'
import C4 from './C4'

const Ct3 = ({data}) => {
  console.log(data);
  const updateval={...data,message:"I hate you more"}
  return (
    <div>
      <C4 data={updateval}/>
    </div>
  )
}

export default Ct3