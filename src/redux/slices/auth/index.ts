import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import { useFirebaseApp } from "reactfire";
import { createUserWithEmailAndPassword } from "firebase/auth";
export interface IAuth {
    token:string
}
const initialState:IAuth={
    token:''
}
//const firebase=useFirebaseApp();
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAccesToke:(state,action:PayloadAction<string>)=>{
            state.token=action.payload;
        }
    }
})
export const {setAccesToke}=authSlice.actions;
export default authSlice.reducer;//estoy exportando el campo 'reducers' de authSlice

/*export const register=async()=>{
    await createUserWithEmailAndPassword()
}*/