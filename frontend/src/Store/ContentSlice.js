import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServices = createAsyncThunk("content/fetchServices", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/services');
    return response.data;   
});

export const fetchOffres = createAsyncThunk("content/fetchOffres", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/offres');
    return response.data;   
});
export const fetchDemandes = createAsyncThunk("content/fetchDemandes", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/demandes');
    return response.data;   
});



const ContentSlice=createSlice({
    name:'content',
    initialState:{
        status:'',
        services:[],
        realisations:[],
        offres:[],
        demandes:[],
        error:'',
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchServices.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchServices.fulfilled, (state, action) => {
            state.status = 'success';
            state.services = action.payload
            state.error = ''
        })
        .addCase(fetchServices.rejected, (state, action) => {
            state.status = 'failed';
            state.services = []
            state.error = action.error.message
        })



        .addCase(fetchOffres.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchOffres.fulfilled, (state, action) => {
            state.status = 'success';
            state.offres = action.payload
            state.error = ''
        })
        .addCase(fetchOffres.rejected, (state, action) => {
            state.status = 'failed';
            state.offres = []
            state.error = action.error.message
        })



        .addCase(fetchDemandes.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchDemandes.fulfilled, (state, action) => {
            state.status = 'success';
            state.demandes = action.payload
            state.error = ''
        })
        .addCase(fetchDemandes.rejected, (state, action) => {
            state.status = 'failed';
            state.demandes = []
            state.error = action.error.message
        })

    }
})
export default ContentSlice.reducer;