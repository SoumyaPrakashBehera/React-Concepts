import React, { useState } from 'react'
import Child from './Child'

const ReactMemo = () => {
   const [count,setCount]=useState(0)
   console.log("parent");
   
  return (
    <div>
      <h1>Reactmemo</h1>
      <p>{count}</p>
      <button className="p-2 border-2 bg-indigo-500 text-white"onClick={()=>setCount(count+1) }>Update</button>
      <Child name={count}/>
    </div>
  )
}

export default ReactMemo