import React from 'react'

const Table = ({products, deleteProduct, ascending, descending}) => {


  return (
    <div>
      <table className='h-full w-auto p-10 border-2 border-black border-solid '>
        <thead>
          <tr>
            <th className='p-10'>Id</th>
            <th className='p-10 flex items-center justify-evenly'> 
              <button onClick={()=>{ascending()}}>A-Z</button>
                Name 
              <button onClick={()=>{descending()}}>Z-A</button>
            </th>
            <th className='p-10'>Images</th>
            <th className='p-10'>Action</th>


            {/* <button onClick={()=> {sortAsc()}}>A-Z</button> */}
            {/* <button>Z-A</button> */}
            
          </tr>
        </thead>
        <tbody>

            {
              products.map((ele, index)=>{
                return <tr key={index}>
                <td className='p-10'>{ele.id}</td>
                <td className='p-10'>{ele.title}</td>
                <td className='p-10'><img className='h-[50px] w-[50px]  ' src={ele.image} alt="" /></td>
                <td className='p-10' onClick={()=> deleteProduct(ele.id)}>Delete</td>
              </tr>
              })
            }

        </tbody>
      </table>
    </div>
  )
}

export default Table