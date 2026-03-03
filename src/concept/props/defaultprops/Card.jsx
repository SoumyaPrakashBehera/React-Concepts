import React, { useReducer } from "react";
const Card=({user:{username="User",age=25}})=>{
  // console.log(username);
  
  return (
    <div>
      <h1>{username}</h1>
      <h2>{age}</h2>
      <hr />
    </div>
  )
}
export default Card