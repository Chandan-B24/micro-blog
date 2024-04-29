import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { User, UserApi } from "../../models/user.model";


const initialState : User = {
    id : 0,
    name : '',
    email : '',
    imageURL : ''
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        authUser(state,action: PayloadAction<UserApi>) {
            console.log(action.payload)
            console.log(state)
            state.id = action.payload.uid
            state.name = action.payload.username
            state.email = action.payload.email
            state.imageURL = action.payload.user_image
        }
    }
});

export const {authUser} = userSlice.actions;
export default userSlice.reducer;