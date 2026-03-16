import React, { useReducer } from 'react'
import { toast } from 'react-toastify'

const UseReducerFormHandle = () => {
  const initialform={
    username:"",
    age:"",
    email:""
  } //step-2
  const formreducer=(state,action)=>{  //step-3
    switch (action.type) {
      case "update":{
        return {...state,...action.payload}
      }
      case "submit":{
        console.log("final data");
        console.log(action.payload);
      }
      case "clear":{
      return initialform
      }
      default:
        return state
    }
  }
  const [formData,dispatch]=useReducer(formreducer,initialform) //step-1
  const handleinput=(e)=>{
    const {name,value}=e.target
    dispatch({type:"update",payload:{[name]:value}})
  }
  const handleform=(e)=>{
    e.preventDefault()
    dispatch({type:"submit",payload:formData})
    dispatch({type:"clear"})
  }
  // console.log(formData);
  
  return (
    <div>
      <form action="" className='bg-amber-300' onSubmit={handleform}>
        <input type="text"  placeholder='your name' className='border' name='username' value={formData.username} onChange={handleinput}/>
        <input type="text"  placeholder='your email' className='border' name='email' value={formData.email} onChange={handleinput}/>
        <input type="text"  placeholder='your age' className='border' name='age' value={formData.age} onChange={handleinput}/>
        <br />
        <br />
        <button className='border'>Submit</button>
        <h1>{formData.username}</h1>
      </form>
    </div>
  )
}

export default UseReducerFormHandle