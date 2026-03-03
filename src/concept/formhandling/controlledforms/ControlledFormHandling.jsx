import React,{useState} from 'react'
//!controlled form handling
//? handle one inpuit field with the help of use state.

//!-controlled component
//? component handle one inpuit field with the help of use ref.

const ControlledFormHandling = () => {
  const[formdata,setformdata]=useState({
    username:""
  })
  const [error,setError]=useState(null)
  const handleinput=(e)=>{
    // console.log(e.target)
    setError(null)
    const {name,value}=e.target //!destructuring the name aand value . e.target==input element,the element where the event happened
    //!const name = e.target.name
    //! const value = e.target.value
    setformdata({...formdata,[name]:value})
  }
  const handleform=(e)=>{
    e.preventDefault()
    if(!formdata.username){
      setError(true)
    }
    setformdata({
      username:""
    })  //!this makes the input empty again.
  }
  return (
    <div>
      <form onSubmit={handleform}>
        <input type="text" placeholder="username" name="username" onChange={handleinput} value={formdata.username}/>
        {
          error?<p style={{color:"red"}}>username is required<sup>*</sup></p>:""
        }
        {/* <input type="text" placeholder="email" name="email" onChange={handleinput} />
        <input type="text" placeholder="password" name="password" onChange={handleinput} /> */}
        <br />
        <button>Submit</button>
        <hr />
      </form>
      <h1>{formdata.username}</h1>
      <h1>{formdata.email}</h1>
      <h1>{formdata.password}</h1>
    </div>
  )
}

export default ControlledFormHandling