import { createContext } from "react";
import { DataSet } from "./Reducers/Data";
export interface AppContextSchema {
    open: Boolean,
    setOpen: (o: Boolean) => void,
    close: Boolean,
    setClose: (c: Boolean) => void,
    index: Number,
    setIndex: (i: Number) => void,
    characters: DataSet[],
    setCharacters: (i: DataSet[]) => void,
}
export const AppContext = createContext<AppContextSchema>({
    open: false,
    setOpen: () => { },
    close: false,
    setClose: () => { },
    index: 0,
    setIndex: () => { },
    characters: [{
        Image: "",
        Name: "",
        Game: "",
        Description: ""
    }],
    setCharacters: () => {
        [{
            Image: "",
            Name: "",
            Game: "",
            Description: ""
        }]
    }
});
