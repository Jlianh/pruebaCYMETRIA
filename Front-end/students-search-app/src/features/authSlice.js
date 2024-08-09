import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    isAutheticated: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isAutheticated = true;
            state.user = action.payload.user;
        },
    }
})

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;