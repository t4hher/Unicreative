import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdmin = createAsyncThunk("admin/login", async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/admin", formData);

        if (response.data.token) {
            localStorage.setItem('admin_token', response.data.token);
        }
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const AdminSlice=createSlice({
    name:'admin',
    initialState:{
        isAdminConnected:false,
        adminUser:{},
        token:"",
        status:'',
        error:''
    },
    reducers:{
        logoutAdmin:(state)=>{
            state.adminUser={};
            state.isAdminConnected=false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAdmin.fulfilled, (state, action) => {
            state.isAdminConnected = true;
            state.adminUser = action.payload.user;
            state.token = action.payload.token;
        });
    }
})
export default AdminSlice.reducer;
export const { logoutAdmin } = AdminSlice.actions;