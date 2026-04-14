import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const InteractionSlice=createSlice({
    name:'admin',
    initialState:{
        status:'',
        messages:[],
        demandes:[],
        candidatures:[],
        error:'',
    },
    reducers:{},
})
export default InteractionSlice.reducer;