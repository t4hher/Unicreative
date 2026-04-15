import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMessages = createAsyncThunk("content/fetchMessages", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/messages');
    return response.data;   
});

const InteractionSlice=createSlice({
    name:'interaction',
    initialState:{
        status:'',
        messages:[],
        demandes:[],
        candidatures:[],
        error:'',
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchMessages.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchMessages.fulfilled, (state, action) => {
            state.status = 'success';
            state.messages = action.payload
            state.error = ''
        })
        .addCase(fetchMessages.rejected, (state, action) => {
            state.status = 'failed';
            state.messages = []
            state.error = action.error.message
        })
    }
})
export default InteractionSlice.reducer;