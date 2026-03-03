const ConditionalRendering=()=>{

  //! what is ConditionalRendering--
  //? it helps to render a component or element based upon a condition. 
  
  let value=true
  if(value){
    return(
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>Bye</h1>
      </div>
    )
  }
}
export default ConditionalRendering