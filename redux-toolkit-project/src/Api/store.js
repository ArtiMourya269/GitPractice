import { postApi} from "./post ";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store= configureStore({
    reducer:{
    [postApi.reducerPath]: postApi.reducer
    },

    middleware:(getDefaultMiddleWare)=>
    getDefaultMiddleWare().concat(postApi.middleware),
})

setupListeners(store.dispatch);