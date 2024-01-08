import { createSlice, PayloadAction, createAction, createAsyncThunk, createReducer, Action, AnyAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../Store";
import axios from "axios";

interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
// interface AuthState {
//     loading: boolean;
//     user: User | null;
//     error: string | null;
//     isAuthenticated: boolean;
// }

// const initialState: AuthState = {
//     loading: false,
//     user: null,
//     error: null,
//     isAuthenticated: false,
// };

// export const userReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase("LoginRequest", (state) => {
//             state.loading = true;
//         })
//         .addCase("LoginSuccess", (state, action: PayloadAction<User>) => {
//             state.loading = false;
//             state.user = action.payload;
//             state.isAuthenticated = true;
//         })
//         .addCase("LoginFailure", (state, action: PayloadAction<string>) => {
//             state.loading = false;
//             state.error = action.payload;
//             state.isAuthenticated = false;
//         });
// });
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

// const userSlice = createSlice({
//     name: 'userAuthentication',
//     initialState,
//     reducers: {
//         loginSuccess: (state) => {
//             console.log("incoming!!");
//             state.isAuthenticated = true;
//             // state.token = String(action.payload);
//         },
//         logout: (state) => {
//             state.isAuthenticated = false;
//             // state.token = null;
//         },
//     },
// });

// export const { loginSuccess, logout } = userSlice.actions;
// export default userSlice.reducer;


// export const login = createAsyncThunk("http://localhost:5000/api/authentication/login", async ({ email, password }: { email: string, password: string }, thunkAPI) => {
//     const response = await axios.post("http://localhost:5000/api/authentication/login", JSON.stringify({ email, password }));
//     const resData = response;
//     console.log(resData);

//     localStorage.setItem("userInfo", JSON.stringify(resData));

//     return resData;
// });

// export const login = ({ email, password }: { email: string, password: string }) => async (dispatch: AppDispatch) => {
//     try {
//         const { data } = await axios.post('http://localhost:5000/api/authentication/login', { email, password }, {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         dispatch({
//             type: "loginSuccess",
//             payload: data.token
//         })
//     } catch (error) {
//         dispatch({
//             type: "loginFailure",
//             payload: error
//         })
//     }
// }

// export default userSlice.reducer;