import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './AdminSlice'
import interactionReducer from './InteractionSlice'
import contentReducer from './ContentSlice'

export const store=configureStore({
    reducer:{
        admin: adminReducer,
        content: contentReducer,
        interaction: interactionReducer,
    }
})