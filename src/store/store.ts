import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/users/UserApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import userSliceReducer from '../features/users/userSlice'


const store = configureStore({
    reducer : {
        //users
        user : userSliceReducer, 
        [userApi.reducerPath] : userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

