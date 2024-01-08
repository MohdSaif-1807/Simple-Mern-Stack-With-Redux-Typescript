import { AppDispatch } from "../Store";
import axios from "axios";

export const fetchAllCharactersData = () => async (dispatch: AppDispatch) => {
    try {
        const { data } = await axios.get("http://localhost:5000/api/data/characters");
        console.log("in Actions!!");
        console.log(data.data);
        dispatch({
            type: "getAllCharactersData",
            payload: data.data
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchSpecificCharacterData = (sno: number) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/data/characterbrief/${sno}`);
        console.log("in Actions-2!!");
        console.log(data);
        dispatch({
            type: "getSpecificCharacterData",
            payload: data.data
        })
    }
    catch (err) {
        console.log(err);
    }
}