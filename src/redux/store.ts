import { configureStore,ThunkAction,Action } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Auth } from "firebase/auth";

const persistAuth={
    key:'auth',
    storage,
    whiteList:['token']
}

const store= configureStore({
    reducer:{
        auth:persistReducer<ReturnType<typeof authReducer>>(persistAuth,authReducer)
    }
});

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export type Thunk=ThunkAction<Promise<unknown>,RootState,unknown,Action<unknown>>
export const persistor=persistStore(store);
export default store;