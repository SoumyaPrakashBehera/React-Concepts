import React, { useEffect, useState } from 'react'
import './Table.css'
import Table from './Table'

const UseEffect1 = () => {
  const [products,setProducts]=useState([])
  const fetchdata=async () => {
    try {
      const response=await fetch("https://fakestoreapi.com/products")
      const fdata=await response.json()
      setProducts(fdata)
    } catch (error) {
        toast.error("Data Not Found")
    }
  }
  useEffect(()=>{
    fetchdata()
  },[])
  console.log(products);
  
  return (
    <div>
      {
        products.length===0?<h1>Loading</h1>:<Table data={products} setProducts={setProducts}/>
      }
    </div>
  )
}

export default UseEffect1