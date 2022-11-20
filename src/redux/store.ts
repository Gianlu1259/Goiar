import { configureStore,ThunkAction,Action } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import noteReducer from './slices/Notas/'
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistAuth={
    key:'auth',
    storage,
    whiteList:['token']
}

const store= configureStore({
    reducer:{
        auth:persistReducer<ReturnType<typeof authReducer>>(persistAuth,authReducer),
        note:noteReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export type Thunk=ThunkAction<Promise<unknown>,RootState,unknown,Action<unknown>>
export const persistor=persistStore(store);
export default store;