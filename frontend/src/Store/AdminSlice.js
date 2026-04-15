import {createSlice } from "@reduxjs/toolkit";

const AdminSlice=createSlice({
    name:'admin',
    initialState:{
        status:'',
        error:''
    },
    reducers:{},
})
export default AdminSlice.reducer;