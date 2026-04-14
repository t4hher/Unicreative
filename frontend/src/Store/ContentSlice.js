import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ContentSlice=createSlice({
    name:'admin',
    initialState:{
        status:'',
        services:[],
        realisations:[],
        offres:[],
        error:'',
    },
    reducers:{},
})
export default ContentSlice.reducer;