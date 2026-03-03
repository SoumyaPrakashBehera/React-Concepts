import React, { useCallback, useState } from 'react'
import Child from '../../hooks/usecallbackhook/Child'


const UseCallBackHook = () => {
  const [count,setCount]=useState(0)
  console.log("parent");
  const deleteuser=useCallback(
    ()=>{
    console.log("User deleted");
  },[]
  )
  return (
    <div>
      <h1>UseCallBackHook</h1>
      <p>{count}</p>
      <button className='p-3 bg-amber-400 cursor-pointer ' onClick={()=>{setCount(count+1)}}>Update</button>
      <hr/>
      <Child data={deleteuser}/>
    </div>
  )
}

export default UseCallBackHook