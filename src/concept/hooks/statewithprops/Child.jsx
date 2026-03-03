import React from "react";
const Child=({count,setCount})=>{
  // console.log(child);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>update in parent</button>
    </div>
  )
}
export default Child