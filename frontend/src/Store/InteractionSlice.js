import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMessages = createAsyncThunk("interaction/fetchMessages", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/messages');
    return response.data;
});
export const fetchMessageById =  createAsyncThunk("interaction/fetchMessageById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/messages/${id}`)
    return response.data;
});
export const editMessage = createAsyncThunk("interaction/editMessage", async ({ id, data }) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/messages/${id}`, data);
    return response.data;
});




export const fetchDemandes = createAsyncThunk("interaction/fetchDemandes", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/demandes');
    return response.data;
});
export const fetchDemandeById =  createAsyncThunk("interaction/fetchDemandeById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/demandes/${id}`)
    return response.data;
});
export const editDemande = createAsyncThunk("interaction/editDemande", async ({ id, data }) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/demandes/${id}`, data);
    return response.data;
});



export const fetchCandi = createAsyncThunk("interaction/fetchCandi", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/candidatures');
    return response.data;
});
export const fetchCandiById =  createAsyncThunk("interaction/fetchCandiById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/candidatures/${id}`)
    return response.data;
});
export const editCandi = createAsyncThunk("interaction/editCandi", async ({ id, data }) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/candidatures/${id}`, data);
    return response.data;
});



const InteractionSlice=createSlice({
    name:'interaction',
    initialState:{
        status:'',
        messages:[],
        message:{},
        demandes:[],
        demande:{},
        candidatures:[],
        candidature:{},
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
        
        .addCase(fetchMessageById.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchMessageById.fulfilled, (state, action) => {
            state.status = 'success';
            state.message = action.payload
            state.error = ''
        })
        .addCase(fetchMessageById.rejected, (state, action) => {
            state.status = 'failed';
            state.message = {}
            state.error = action.error.message
        })
        .addCase(editMessage.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(editMessage.fulfilled, (state, action) => {
            state.status = 'success';
            state.messages = state.messages.map(m =>
                (m.id == action.payload.data.id) ? { ...m, lue: action.payload.data.lue } : m
            );
            state.message.message.lue = action.payload.data.lue;
            state.error = "";
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
        .addCase(fetchDemandeById.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchDemandeById.fulfilled, (state, action) => {
            state.status = 'success';
            state.demande = action.payload
            state.error = ''
        })
        .addCase(fetchDemandeById.rejected, (state, action) => {
            state.status = 'failed';
            state.demande = {}
            state.error = action.error.message
        })
        .addCase(editDemande.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(editDemande.fulfilled, (state, action) => {
            state.status = 'success';
            state.demandes = state.demandes.map(d =>
                (d.id == action.payload.data.id) ? { ...d, lue: action.payload.data.lue } : d
            );
            state.demande.demande.lue = action.payload.data.lue;
            state.error = "";
        })



        .addCase(fetchCandi.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCandi.fulfilled, (state, action) => {
            state.status = 'success';
            state.candidatures = action.payload
            state.error = ''
        })
        .addCase(fetchCandi.rejected, (state, action) => {
            state.status = 'failed';
            state.candidatures = []
            state.error = action.error.message
        })
        .addCase(fetchCandiById.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCandiById.fulfilled, (state, action) => {
            state.status = 'success';
            state.candidature = action.payload
            state.error = ''
        })
        .addCase(fetchCandiById.rejected, (state, action) => {
            state.status = 'failed';
            state.candidature = {}
            state.error = action.error.message
        })
        .addCase(editCandi.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(editCandi.fulfilled, (state, action) => {
            state.status = 'success';
            state.candidatures = state.candidatures.map(c =>
                (c.id == action.payload.data.id) ? { ...c, lue: action.payload.data.lue } : c
            );
            state.candidature.candidature.lue = action.payload.data.lue;
            state.error = "";
        })
    }
})
export default InteractionSlice.reducer;
