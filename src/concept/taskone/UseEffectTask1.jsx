import React, { useEffect, useState } from 'react'
import Table from './Table'

const UseEffectTask1 = () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const fdata = await fetch("https://fakestoreapi.com/products")
      const alldata = await fdata.json()
      setData(alldata)
    } catch (error) {
      console.log(error.message);
      
    }
    
  }
  const deleteProduct = (id) => {
    const updatedData = data.filter((ele) => ele.id !== id)
    setData(updatedData)
  }

  const ascProducts = () => {
    const ascending = [...data].sort((a, b) => a.id- b.id)
    setData(ascending)
  }

  const desProducts = () => {
    const descending = [...data].sort((a, b)=> b.id-a.id);
    setData(descending)
  }

  useEffect(()=> {
    fetchData();
  },[])

  console.log(data);
  
  return (
    <div>
      {/* <button onClick={()=> {desProducts()}}>Sort</button> */}
      {
        data.length === 0 ? <h1>Loading</h1> : <Table products = {data} deleteProduct = {deleteProduct} descending = {desProducts} ascending = {ascProducts}/>
      }
    </div>
  )
}

export default UseEffectTask1
