import {store} from "../../app/store.ts";
import type {rootReducer} from "../../app/reducers.ts";

export type AppDispatch = typeof store.dispatch
export type RootReducer = typeof rootReducer
export type AppRootState = ReturnType<RootReducer>
