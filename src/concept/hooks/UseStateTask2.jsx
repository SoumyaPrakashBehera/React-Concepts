import React,{useState} from "react";
//in an object if we have same keys the last object value will get update,,the last one will be remember--interview question
const UseStateTask2=()=>{
   const[count,setCount]=useState(0)
   const update=()=>{
    setCount(count+1)
   }
  //  update()
    // console.log(count);
  return(
    <div className="task2">
      <h1>{count}</h1>
     {/* <button onClick={update}>hello</button> */}
     <button onClick={()=>{setCount(count+1)}}>hello</button>
      
    </div>
  )
}
export default UseStateTask2