import { createReducer, AnyAction } from "@reduxjs/toolkit";
export interface DataSet {
    Image: string,
    Name: string,
    Game: string,
    Description: string
}
interface DataSetStructure {
    data: [DataSet]
}
const initialState: DataSetStructure = {
    data: [{
        Image: "",
        Name: "",
        Game: "",
        Description: ""
    }]

}


export const dataReducer = createReducer(initialState, (builder) => {
    builder.addCase("getAllCharactersData", (state, action: AnyAction) => {
        state.data = action.payload;
    })
})