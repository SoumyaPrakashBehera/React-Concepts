import React from 'react'

const TailwindCssConcept = () => {
  const arr=[1,2,3,4,5,6,7,8]
  return (
  <div className='w-screen h-auto flex flex-wrap gap-25'>
    {/* <h1 className='bg-blue-500 font-extrabold underline uppercase hover:bg-purple-500 text-amber-300  text-[50px] '>Hello Tailwind</h1> */}
  {
    arr.map((ele,index)=>{
      return (
        <div key={index} className='w-[300px] h-[400px]  bg-amber-500 border-2 rounded-lg flex items-center justify-center hover:bg-purple-400 hover:scale-105 transition-all duration-[1s] animate-pulse'>{ele}</div>
      )
    })
  }
  </div>
  )
}
export default TailwindCssConcept