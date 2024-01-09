import { createReducer, AnyAction } from "@reduxjs/toolkit";
export interface DataSetBrief {
    sno: number
    ImageUrl: string,
    Name: string,
    Game: string,
    Description: string
}
interface DataSetBriefStructure {
    data_brief: DataSetBrief
}
const initialState: DataSetBriefStructure = {
    data_brief: {
        sno: -1,
        ImageUrl: "",
        Name: "",
        Game: "",
        Description: ""
    }
}

export const specificDataReducer = createReducer(initialState, (builder) => {
    builder.addCase("getSpecificCharacterData", (state, action: AnyAction) => {
        state.data_brief = action.payload;
    })
})

// export default specificDataReducer;
