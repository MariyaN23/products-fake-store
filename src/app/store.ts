import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "./reducers.ts";

export const store = configureStore({
    reducer: rootReducer
})
