const TernaryRender=()=>{
  let value=true
  let per=66
  let theme="light"
  return (
    <div>
      {value? <h1>Hello</h1> : <h1>Bye</h1>}

      {(per>70)?<p>A Grade</p>:(per<70 && per>50)?<p>B Grade</p>:<p>Fail</p>}

      <h1 style={theme==="dark"?{backgroundColor:"red"}:{backgroundColor:"blue"}}>SOUMYA</h1>

      <div className={`box ${theme==="dark"?"dark":"light"}`}></div>
    </div>
  )
}

export default TernaryRender