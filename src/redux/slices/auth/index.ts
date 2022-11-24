import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { LoginData } from "../../../types/loginType";
import { Thunk } from "../../store";

export interface IAuth {
    id:string,
    email:string | null
}
export interface Register{
    email: string;
    password: string;
}
const initialState:IAuth={
    id:'',
    email:''
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setIdUser:(state,action:PayloadAction<IAuth>)=>{
            state.id=action.payload.id;
            state.email=action.payload.email;
        },
        setEmailUser:(state,action:PayloadAction<string>)=>{
            state.id=action.payload;
        },
        setLogoutData: (state) => {
            state.id = '';
          }
    }
})
export const {setIdUser,setLogoutData}=authSlice.actions;
export default authSlice.reducer;//estoy exportando el campo 'reducers' de authSlice

export const login = 
    (data:LoginData): Thunk =>
    async (dispatch) :Promise<UserCredential>=>{
    try{
        const auth=getAuth();
        const response = signInWithEmailAndPassword(auth,data.email,data.password);
        response.then((user)=>{
            dispatch(setIdUser({id:user.user.uid,email:user.user.email}));
        })
    return response;
    }catch(error){
        return error as Promise<UserCredential>;
    }
}

export const registerUser = 
    (data:Register): Thunk =>
    async (dispatch) :Promise<UserCredential>=>{
    try{
        const auth=getAuth();
        const response = createUserWithEmailAndPassword(auth,data.email,data.password);
        response.then((user)=>{
            dispatch(setIdUser({id:user.user.uid,email:user.user.email}));
        })
    return response;
    }catch(error){
        return error as Promise<UserCredential>;
    }
}
