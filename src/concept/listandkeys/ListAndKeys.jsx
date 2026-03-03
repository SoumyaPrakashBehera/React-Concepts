import React, { Fragment } from "react";
const ListAndKeys=()=>{
  //! to make better recoincillation process we go for key
  let arr=['soumya','yuzi','Pandya']
  return (
    <div>
      {
        arr.map((ele,index)=>{
            return (
              <Fragment key={index}>
                <h1>{ele}</h1>
              </Fragment>
            )
        })
      }
    </div>
  )
}
export default ListAndKeys