import React,{useState} from "react";
const UseStateHook=()=>{
  const [count,setCount]=useState(0)
  // console.log(data);
  const updatevalue=()=>{
    setCount(count+1)
  }
  const subvalue=()=>{
    setCount(count-1)
  }
  const reset=()=>{
    setCount(0)
  }
  // console.log(hello);
  
  return(
    <div className="usestatehook">
      <h1>{count}</h1>
    <button onClick={updatevalue}>Add</button>
    <button onClick={subvalue}>Sub</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}
export default UseStateHook