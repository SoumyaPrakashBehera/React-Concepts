import React from 'react'

const Table = ({data,setProducts}) => {
  const deleteid=(id)=>{
    const deletedata=data.filter((ele)=>{ele.id !== id})
    setProducts(deletedata)
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
            
              {
                data.map((ele,index)=>{
                  return <tr key={index}>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>
                      <img src={ele.image} alt="" width={100}/>
                    </td>
                    <td><button onClick={()=>{deleteid(ele.id)}} >Delete</button></td>
                  </tr>
                
                })
              }
            
        
        </tbody>
      </table>
    </div>
  )
}

export default Table