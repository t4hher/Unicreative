import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('admin_token');

export const fetchServices = createAsyncThunk("content/fetchServices", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/services', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
export const fetchServiceById =  createAsyncThunk("content/fetchServiceById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/services/${id}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
    return response.data;
});
export const deleteServiceById =  createAsyncThunk("content/deleteServiceById", async (id, { rejectWithValue })=> {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/services/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const addService = createAsyncThunk("content/addService", async(formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/services", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const editService = createAsyncThunk("content/editService", async ({ id, formData }, { rejectWithValue }) => {
    formData.append("_method", "PUT"); 
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/services/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
    
});




export const fetchOffres = createAsyncThunk("content/fetchOffres", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/offres', {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
    return response.data;
});
export const fetchOffreById =  createAsyncThunk("content/fetchOffreById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/offres/${id}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
    return response.data;
});
export const addOffre = createAsyncThunk("content/addOffre", async(formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/offres", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const editOffre = createAsyncThunk("content/editOffre", async ({ id, formData }, { rejectWithValue }) => {
    formData.append("_method", "PUT"); 
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/offres/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const deleteOffreById =  createAsyncThunk("content/deleteOffreById", async (id, { rejectWithValue })=> {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/offres/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});



export const fetchReali = createAsyncThunk("content/fetchReali", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/realisations', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
export const fetchRealisationById =  createAsyncThunk("content/fetchRealisationById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/realisations/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
});
export const addReali = createAsyncThunk("content/addReali", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/realisations", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
    
});
export const deleteRealiById =  createAsyncThunk("content/deleteRealiById", async (id, { rejectWithValue })=> {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/realisations/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
    
});
export const editReali = createAsyncThunk("content/editReali", async ({ id, formData}, { rejectWithValue }) => {
    formData.append("_method", "PUT"); 
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/realisations/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
    
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
        AdminMsg:{
            service:'',
            offre:'',
            reali:'',
        },
    },
    reducers:{
        clearMessage: (state) => {
            state.AdminMsg = {};
        }
    },
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
        .addCase(deleteServiceById.pending,(state)=>{
            state.status='loading';
        })
        .addCase(deleteServiceById.fulfilled,(state,action)=>{
            state.status='success';
            state.services=state.services.filter(service => service.id != action.payload.id);
            state.error='';
            state.AdminMsg.service=action.payload.message
        })
        .addCase(deleteServiceById.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error.message;
        })
        .addCase(addService.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addService.fulfilled, (state, action) => {
            state.status = 'success';
            state.services=[...state.services, action.payload.data]; 
            state.error="";
            state.AdminMsg.service=action.payload.message
        })
        .addCase(addService.rejected, (state, action) => {
            state.status = 'rejected';
            state.error=action.error.message;
        })
        .addCase(editService.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(editService.fulfilled, (state, action) => {
            state.status = 'success';
            state.services=state.services.map(s=> s.id == action.payload.data.id ? action.payload.data : s);
            state.error="";
            state.AdminMsg.service=action.payload.message
        })
        .addCase(editService.rejected, (state, action) => {
            state.status = 'rejected';
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
        .addCase(addOffre.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addOffre.fulfilled, (state, action) => {
            state.status = 'success';
            state.offres=[...state.offres, action.payload.data]; 
            state.error="";
            state.AdminMsg.offre=action.payload.message
        })
        .addCase(addOffre.rejected, (state, action) => {
            state.status = 'rejected';
            state.error=action.error.message;
        })
        .addCase(editOffre.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(editOffre.fulfilled, (state, action) => {
            state.status = 'success';
            state.offres=state.offres.map(o=> o.id == action.payload.data.id ? action.payload.data : o);
            state.error="";
            state.AdminMsg.offre=action.payload.message
        })
        .addCase(editOffre.rejected, (state, action) => {
            state.status = 'rejected';
            state.error=action.error.message;
        })
        .addCase(deleteOffreById.pending,(state)=>{
            state.status='loading';
        })
        .addCase(deleteOffreById.fulfilled,(state,action)=>{
            state.status='success';
            state.offres=state.offres.filter(service => service.id != action.payload.id);
            state.error='';
            state.AdminMsg.offre=action.payload.message
        })
        .addCase(deleteOffreById.rejected,(state,action)=>{
            state.status='failed';
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
        .addCase(addReali.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addReali.fulfilled, (state, action) => {
            state.status = 'success';
            state.realisations=[...state.realisations, action.payload.data]; 
            state.error="";
            state.AdminMsg.reali=action.payload.message
        })
        .addCase(addReali.rejected, (state, action) => {
            state.status = 'rejected';
            state.error=action.error.message;
        })
        .addCase(deleteRealiById.pending,(state)=>{
            state.status='loading';
        })
        .addCase(deleteRealiById.fulfilled,(state,action)=>{
            state.status='success';
            state.realisations=state.realisations.filter(service => service.id != action.payload.id);
            state.error='';
            state.AdminMsg.reali=action.payload.message
        })
        .addCase(deleteRealiById.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error.message;
        })
        .addCase(editReali.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(editReali.fulfilled, (state, action) => {
            state.status = 'success';
            state.realisations=state.realisations.map(r=> r.id == action.payload.data.id ? action.payload.data : r);
            state.error="";
            state.AdminMsg.reali=action.payload.message
        })
        .addCase(editReali.rejected, (state, action) => {
            state.status = 'rejected';
            state.error=action.error.message;
        })



    }
})
export default ContentSlice.reducer;
export const { clearMessage } = ContentSlice.actions;