import React, { useState } from 'react'

const ControlledForm2 = () => {
  const [formdata,setformdata]=useState({
    username:"",
    email:"",
    password:""
  })
  const {username,email,password,course}=formdata
  const handleinput=(e)=>{
  //  console.log(e.target);
   const {name,value}=e.target
   setformdata({...formdata,[name]: value})
  }
  const handleform=(e)=>{
    e.preventdefault()
    console.log(formdata);
    setformdata({
    username:"",
    email:"",
    password:"",
    course:""
    })
    
    
  }
  
  return (
    <div>
      <form onSubmit={handleform}>
        <div>
          <input type="text" placeholder='your name' name='username' value={username} onChange={handleinput}/>
        </div>
        <div>
          <input type="email" placeholder='your email' name='email' value={email} onChange={handleinput}/>
        </div>
        <div>
          <input type="password" placeholder='your password' name='password' value={password} onChange={handleinput}/>
        </div>
        <div>
          <label htmlFor="">course</label>
          <select name="course" value={course} onChange={handleinput}>
            <option value="" selected={!course?true:false}></option>
            <option value="B.tech">B.tech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
          </select>
          
        </div>
        <div>

        </div>
        <button>submit</button>
      </form>
    </div>
  )
}

export default ControlledForm2