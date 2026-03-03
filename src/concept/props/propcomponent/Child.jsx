import React from "react";
const Child=(props)=>{
  return (
    <div>
     <h1>{props.name}</h1>
     <h2>{props.age}</h2>
     <p>{props.Email}</p>
     <hr />
    </div>
  )
}
export default Child