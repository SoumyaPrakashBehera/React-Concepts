import {useRef} from "react"
import { toast } from "react-toastify"
const UncontrolledFormHandling=()=>{
  const usernameRef=useRef(null)
  const passwordRef=useRef(null)
  const maleRef=useRef(null)
  const femaleRef=useRef(null)
  const othersRef=useRef(null)
  const handleform=(e)=>{
    e.preventDefault()
    // console.log(e);
    // console.log("Form Submitted");
    const username=usernameRef.current.value
    const password=passwordRef.current.value
    const gender=(maleRef.current.checked)?"Male":(femaleRef.current.checked)?"Female":(othersRef.current.checked)?"Others":"null"
    if(!username){
      usernameRef.current.style.outline="2px solid red"
      toast.error("Username is Required",{position:"top-center"})
      setTimeout(() => {
        usernameRef.current.style.outline="none"
      },2000);
      return
    }
    if(!password){
      toast.error("Password is  Required",{position:"top-center"})
      return
    }
    const data={
      password,username,gender
    }
    console.log(data);
    
    
  }
return (
  <>
  {/* <h1>UncontrolledFormHandling</h1> */}

  <form onSubmit={handleform}>
    <input type="text" placeholder="Enter Your name"  ref={usernameRef}/>
    <input type="text" placeholder="Enter Your Password"  ref={passwordRef}/>
    <br/>
    <label htmlFor="male">
      <input type="radio" value="male" id="male" name="gender" ref={maleRef}/>Male
    </label>
    <label htmlFor="female">
      <input type="radio" value="female" id="female" name="gender" ref={femaleRef}/>Female
    </label>
    <label htmlFor="others">
      <input type="radio" value="others" id="others" name="gender" ref={othersRef}/>Others
    </label>
    <button>Submit</button>
  </form>
  </>
)
}
export default UncontrolledFormHandling