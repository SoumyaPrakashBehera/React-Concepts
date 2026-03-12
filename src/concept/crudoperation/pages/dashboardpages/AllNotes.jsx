import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import NoteCard from './NoteCard'

const AllNotes = () => {
  const [allnotes,setallnotes]=useState(null)
  const fetchallnotes=async()=>{
    try {
      const {data}=await axios.get("http://localhost:3000/notes")
      setallnotes(data)
    } catch (error) {
      toast.error("something went wrong")
      console.log(error.message);
    }
  
  
  }
  useEffect(()=>{
      fetchallnotes()
    },[])
    console.log(allnotes);
  return (
    <div>
      {
        allnotes?.map((note,index)=>{
          return (
            <Fragment key={index}>
              <NoteCard data={note}/>
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default AllNotes