import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedInUser: null
    },
    reducers: {
        updateLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        }
    }
})

export const {updateLoggedInUser} = userSlice.actions;

export default userSlice.reducer;