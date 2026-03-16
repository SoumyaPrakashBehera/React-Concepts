import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/counterslice'

const ReduxToolKitConcept = () => {
  const result=useSelector((state)=>state.counter)
  const dispatch=useDispatch()
  
  return (
    <div className='h-75 w-62.5 bg-amber-300 flex items-center flex-col justify-between'>
      <h1 className='text-9xl'>{result}</h1>
      <button className='border bg-indigo-300 px-1.5 py-1.5' onClick={()=>dispatch(increment())}>INCREMENT</button>
      <button className='border bg-teal-300 px-1.5 py-1.5' onClick={()=>dispatch(decrement())}>DECREMENT</button>
      <button className='border bg-red-600 px-1.5 py-1.5' onClick={()=>dispatch(reset())}>RESET</button>
    </div>
  )
}

export default ReduxToolKitConcept