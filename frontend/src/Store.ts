import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/User';
import { dataReducer } from './Reducers/Data';
import { specificDataReducer } from "./Reducers/SpecificData";
const store = configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer,
        data_brief: specificDataReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
