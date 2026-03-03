import React from "react"
import { AiFillAccountBook } from "react-icons/ai";
import { AiFillChrome } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import TOJI from "../../assets/toji.jpg"
const Icons_Implement=()=>{
  return (
    <div className="hlo">
      <h1><AiFillAccountBook/></h1>
      <h1><AiFillChrome /></h1>
      <h1><AiFillDislike /></h1>
      <img src={TOJI} alt="" />
    </div>
  )
}
export default Icons_Implement