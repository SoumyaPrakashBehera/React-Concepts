import React from "react"
const JsxExpression=()=>{
  //jsx expression is used to access the js variable or function inside the jsx | html
  //syntax---{}

  //NOTE-->inside the jsx expression it is not possible to declare a variable.
  //it is possible to only access the variable
  //it is possible to reinitialize a variable inside the jsx
  //initialization is possible inside jsx

  // how to use js functions or how to call js functions
  //if arrow function is returning a jsx element the the function is called as a component.
  //if arrow function is not  returning a jsx element the the function is called as a js functions.

  //react use synthetic events , html use dom events

  //inside the jsx if we want to use conditional statement then we need to use ternary operator.
  //if i want to use the loop the map method

  let username="Soumya"
  let is_active=true
  let demo=()=>{
    console.log("Prakash is Good Boy");
  }
  let arr=['Soumya','prakash','prabina']
  return (
    <div>
      {/* <h1>{username}</h1>
      {username ='naruto'} */}

    {/* <button onClick={demo}>Click</button> */}
   {/* {
    is_active?<h1>hello</h1>:<h1>Byy</h1>
   } */}
  {
    arr.map((ele)=>{
      return <h1>{ele}</h1>
    })
  }
    </div>
  )
}
export default JsxExpression
 
