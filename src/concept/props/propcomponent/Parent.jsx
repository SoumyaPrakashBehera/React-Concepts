import React from "react";
import Child from "./Child";
const Parent=()=>{
  return (
    <div id='parent' className="parent">
      <Child name='Soumya' age={21} Email="soumya@gmail.com"/>
      <Child name='hello' age={22} Email="hello@gmail.com"/>
      <Child name='byy' age={23} Email="byy@gmail.com"/>
    </div>
  )
}
export default Parent