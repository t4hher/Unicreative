import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServices = createAsyncThunk("content/fetchServices", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/services');
    return response.data;
});
export const fetchServiceById =  createAsyncThunk("content/fetchServiceById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/services/${id}`)
    return response.data;
});



export const fetchOffres = createAsyncThunk("content/fetchOffres", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/offres');
    return response.data;
});
export const fetchOffreById =  createAsyncThunk("content/fetchOffreById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/offres/${id}`)
    return response.data;
});



export const fetchReali = createAsyncThunk("content/fetchReali", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/realisations');
    return response.data;
});
export const fetchRealisationById =  createAsyncThunk("content/fetchRealisationById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/realisations/${id}`)
    return response.data;
});



const ContentSlice=createSlice({
    name:'content',
    initialState:{
        status:'',
        services:[],
        service:{},
        realisations:[],
        realisation:{},
        offres:[],
        offre:{},
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
        .addCase(fetchServiceById.pending,(state)=>{
                state.status='loading';
        })
        .addCase(fetchServiceById.fulfilled,(state,action)=>{
            state.status='success';
            state.service=action.payload;
            state.error='';
        })
        .addCase(fetchServiceById.rejected,(state,action)=>{
            state.status='failed';
            state.service={};
            state.error=action.error.message;
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
        .addCase(fetchOffreById.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchOffreById.fulfilled,(state,action)=>{
            state.status='success';
            state.offre=action.payload;
            state.error='';
        })
        .addCase(fetchOffreById.rejected,(state,action)=>{
            state.status='failed';
            state.offre={};
            state.error=action.error.message;
        })



        .addCase(fetchReali.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchReali.fulfilled, (state, action) => {
            state.status = 'success';
            state.realisations = action.payload
            state.error = ''
        })
        .addCase(fetchReali.rejected, (state, action) => {
            state.status = 'failed';
            state.realisations = []
            state.error = action.error.message
        })
        .addCase(fetchRealisationById.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchRealisationById.fulfilled,(state,action)=>{
            state.status='success';
            state.realisation=action.payload;
            state.error='';
        })
        .addCase(fetchRealisationById.rejected,(state,action)=>{
            state.status='failed';
            state.realisation={};
            state.error=action.error.message;
        })



    }
})
export default ContentSlice.reducer;
