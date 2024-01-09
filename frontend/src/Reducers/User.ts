import { createReducer, AnyAction } from "@reduxjs/toolkit";
interface AuthState {
    isAuthenticated: boolean,
    token: string | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null
};


export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase("loginSuccess", (state, action: AnyAction) => {
        state.isAuthenticated = true;
        state.token = action.payload;
    })
    builder.addCase("logoutSuccess", (state) => {
        state.isAuthenticated = false;
        state.token = null
    })
})
