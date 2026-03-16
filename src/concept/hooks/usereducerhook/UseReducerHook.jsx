import React, { useReducer } from 'react'

const UseReducerHook = () => {
  const reducer=(state,action)=>{
   switch (action) {
    case "INCRE":
      return state+1;
    case "DECRE":
      return state-1;
    case "RESET":
      return 0;
    default:
      return state
   }
  }
  const [count,dispatch]=useReducer(reducer,0)
  console.log(count);
  
  return (
    <div className='h-[200px] w-[220px] flex items-center justify-center flex-col gap-1 pt-20'>
      <h1 className='bg-amber-300 p-2 '>UseReducerHook</h1>
      <p className='text-5xl'>{count}</p>
      <button className='border bg-teal-500 p-2' onClick={()=>{dispatch("INCRE")}}>INCRE</button>
      <button className='border bg-indigo-500 p-2' onClick={()=>{dispatch("DECRE")}}>DECRE</button>
      <button className='border bg-red-500 p-2' onClick={()=>{dispatch("RESET")}}>RESET</button>
  </div>
  )
}

export default UseReducerHook  
//! it is a advanve hook handle complex state reducer function initial state  it will store thr reducer function