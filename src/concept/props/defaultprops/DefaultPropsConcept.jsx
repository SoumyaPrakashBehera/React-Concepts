import React from "react";
import Card from "./Card";
const DefaultPropsConcept=()=>{
  const data=[
    {
      username:"Soumya",
      age:21
  },{
    age:22
  },{
    username:"Sasuke"
  }
]
  return (
    <div>
      {
        data.map((ele)=>{
          return (<Card user={ele}/>)
        })
      }
    </div>
  )
}
export default DefaultPropsConcept