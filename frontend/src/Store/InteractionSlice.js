import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem('admin_token');

export const fetchMessages = createAsyncThunk("interaction/fetchMessages", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/messages', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
});
export const fetchMessageById =  createAsyncThunk("interaction/fetchMessageById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/messages/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
});
export const editMessage = createAsyncThunk("interaction/editMessage", async ({ id, data }) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/messages/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
export const addMessage = createAsyncThunk("interaction/addMessage", async(formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/messages", formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});




export const fetchDemandes = createAsyncThunk("interaction/fetchDemandes", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/demandes', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
export const fetchDemandeById =  createAsyncThunk("interaction/fetchDemandeById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/demandes/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
});
export const editDemande = createAsyncThunk("interaction/editDemande", async ({ id, data }) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/demandes/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});

export const addDemande = createAsyncThunk("interaction/addDemande", async(formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/demandes", formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});



export const fetchCandi = createAsyncThunk("interaction/fetchCandi", async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/candidatures', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
export const fetchCandiById =  createAsyncThunk("interaction/fetchCandiById", async (id)=> {
    const response = await axios.get(`http://127.0.0.1:8000/api/candidatures/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data;
});
export const editCandi = createAsyncThunk("interaction/editCandi", async ({ id, data }) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/candidatures/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
export const addCandi = createAsyncThunk("interaction/addCandi", async(formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/candidatures", formData, {
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
        AdminMsg:{
            demande:'',
            message:'',
            candi:'',
        },
        ClientMsg:{
            demande:'',
            message:'',
            candi:'',
        },
        error:'',
    },
    reducers:{
        clearMessage: (state) => {
            state.AdminMsg = {};
            state.ClientMsg = {};
        }
    },
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
            if (state.message.message) state.message.message.lue = action.payload.data.lue;
            state.error = "";
            state.AdminMsg.message=action.payload.message;
        })
        .addCase(addMessage.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addMessage.fulfilled, (state, action) => {
            state.status = 'success';
            state.messages=[...state.messages, action.payload.data];
            state.error="";
            state.ClientMsg.message=action.payload.message
        })
        .addCase(addMessage.rejected, (state, action) => {
            state.status = 'rejected';
            state.error=action.error.message;
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
            if (state.demande.demande) state.demande.demande.lue = action.payload.data.lue;
            state.error = "";
            state.msg = action.payload.message;
            state.AdminMsg.demande=action.payload.message;
        })
        .addCase(addDemande.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addDemande.fulfilled, (state, action) => {
            state.status = 'success';
            state.demandes=[...state.demandes, action.payload.data];
            state.error="";
            state.ClientMsg.demande=action.payload.message
        })
        .addCase(addDemande.rejected, (state, action) => {
            state.status = 'rejected';
            state.error=action.error.message;
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
            if (state.candidature.candidature) state.candidature.candidature.lue = action.payload.data.lue;
            state.error = "";
            state.msg = action.payload.message;
            state.AdminMsg.candi=action.payload.message
        })
        .addCase(addCandi.pending, (state) => {
                    state.status = 'loading';
        })
        .addCase(addCandi.fulfilled, (state, action) => {
            state.status = 'success';
            state.candidatures=[...state.candidatures, action.payload.data];
            state.error="";
            state.msg = action.payload.message;
            state.ClientMsg.candi=action.payload.message
        })
        .addCase(addCandi.rejected, (state, action) => {
            state.status = 'rejected';
            state.error=action.error.message;
        })
    }
})
export default InteractionSlice.reducer;
export const { clearMessage } = InteractionSlice.actions;
