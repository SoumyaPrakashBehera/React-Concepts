import React, { Fragment } from "react";
const ReactFragments=()=>{
  //! <></>-this is called fragement it will act like a parent container..reconcilaation will incrase because of extra div
  //! i need give css then go with div otherwise go with fragments.
  //! fragments will not accept any attribute.
  let arr=['Soumya','Naruto','Sasuke','Shikamaru']
  return (
    <>
      {/* <ul>
        {
          arr.map((ele)=>{
            return (
              <>
              <li>{ele}</li>
              <a href="">{ele}</a>
              </>
            )
          })
        }
      </ul> */}
      <Fragment>
      <h1>HIi</h1>
      </Fragment>
    </>
  )
}
export default ReactFragments