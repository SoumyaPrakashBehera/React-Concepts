import { createSlice } from "@reduxjs/toolkit";

//createSlice - it will create reducers,it will accept an object
const initialState=0
const counterslice=createSlice({
  name:"counter",
  initialState,
  reducers:{
    increment:(state)=>{
      return state+1
    },
    decrement:(state)=>{
      return state-1
    },
    reset:(state)=>{
      return 0
    }
  }
})
export const {increment,decrement,reset}=counterslice.actions
export default counterslice.reducer