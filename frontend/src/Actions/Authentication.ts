import { AppDispatch } from "../Store";
import axios from "axios";

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/api/authentication/login', { email, password }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const { jwt_token } = data;
        console.log(jwt_token);
        dispatch({
            type: "loginSuccess",
            payload: jwt_token
        })
    } catch (error) {
        dispatch({
            type: "loginFailure",
            payload: error
        })
    }
}

export const Logout = () => async (dispatch: AppDispatch) => {
    try {
        const { data } = await axios.post("http://localhost:5000/api/authentication/logout");
        dispatch({
            type: "logoutSuccess",
            payload: data
        })
    }
    catch (err) {
        console.log(err);
    }

}