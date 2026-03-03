import React,{useState,useEffect} from 'react'

const UseEffectHome = () => {
  const [count,setCount]=useState(0)
  const [val,setval]=useState(10)
  const fdata=()=>{
    console.log("fdata function");
  }
  // useEffect(()=>{
  //   fdata()
  // },[])

  // useEffect(()=>{
  //   fdata()
  // },[count,val])

//  useEffect(()=>{
//     fdata()
//   })


  return (
    <div>
      <h2>{count}</h2>
      <p>{val}</p>
      <button onClick={()=>setCount(count+1)}>Submit</button>
      <button onClick={()=>setval(val+10)}>Update</button>
    </div>
  )
}

export default UseEffectHome