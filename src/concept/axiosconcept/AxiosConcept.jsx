import axios from 'axios'
import React, { useEffect, useState } from 'react'
//!Axios is a 3rd party library it is used to handle the api request in frontend//http request in fromtend.
//? get,post,put-remove the old object and put the new objecteverything will be updated,patch-PARTIALLY UPDATED,delete-http method

const AxiosConcept = () => {
  const [products,setProducts]=useState([])
  const fdata=async () => {
    const {data}=await axios.get("https://fakestoreapi.com/products")
    setProducts(data)
  }
  useEffect(()=>{
    fdata()
  },[])
  return (
    <div>
      <h1>Axios</h1>
      {
        products.length==0?<h1>Loadinggg...</h1>:products.map((ele,index)=>{
          return <h2 key={index}>{ele.title}</h2>
        })
      }
    </div>
  )
}

export default AxiosConcept