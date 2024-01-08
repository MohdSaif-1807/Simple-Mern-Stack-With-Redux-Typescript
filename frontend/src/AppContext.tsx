import { createContext } from "react";
export interface AppContextSchema {
    open: Boolean,
    setOpen: (o: Boolean) => void,
    close: Boolean,
    setClose: (c: Boolean) => void,
    index: Number,
    setIndex: (i: Number) => void
}
export const AppContext = createContext<AppContextSchema>({
    open: false,
    setOpen: () => { },
    close: false,
    setClose: () => { },
    index: 0,
    setIndex: () => { }
});
