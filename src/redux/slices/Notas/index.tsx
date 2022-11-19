import {createSlice,PayloadAction} from "@reduxjs/toolkit";



export interface INotes {
    notes:[];
    lastVisible :number
}
export interface Register{
    email: string;
    name:string;
    password: string;
}
const initialState:INotes={
    notes:[],
    lastVisible:1
}

const noteSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setNotesData:(state,action:PayloadAction<[]>)=>{
            state.notes=action.payload;
        }
    }
})
export const {setNotesData}=noteSlice.actions;
export default noteSlice.reducer;//estoy exportando el campo 'reducers' de authSlice

export const login = {
    
}