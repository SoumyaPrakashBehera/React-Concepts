import React, { useMemo, useState } from 'react'
//! how many times you will return the function it will return the same value--PURE Function.
//?it is an optimization hook it will accept an function with dependency memeorize the previous value of a function.
const UseMemoHook = () => {
  const [count,setCount]=useState(0)
  const expensiveCalculation=useMemo(
    ()=>{
    
    let sum=0
    for(let i=1;i<100000000;i++){
      sum+=i
    }
    return sum
  },[]
  )
  console.log(expensiveCalculation)
  return (
    <div>
      <h1>UseMemoHook</h1>
      <h1 className='text-6xl'>{count}</h1>
      <button className='p-3 bg-indigo-500 cursor-pointer' onClick={()=>{setCount(count+1)}}>Update</button>
    </div>
  )
}

export default UseMemoHook