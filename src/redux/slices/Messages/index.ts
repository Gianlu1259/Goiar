import {createSlice,PayloadAction} from "@reduxjs/toolkit";

export interface IMessage {
    error:string,
    succes:string,
    warning:string
}
const initialState:IMessage={
    error:'',
    succes:'',
    warning:''
}

const messageSlice=createSlice({
    name:'Message',
    initialState,
    reducers:{
        setSuccesData:(state,action:PayloadAction<string>)=>{
            state.succes=action.payload
        },
        setErrorData:(state,action:PayloadAction<string>)=>{
            state.error=action.payload
        },
        setClearData(state){
            state.error=''
            state.succes=''
            state.warning=''
        }
        
    }
})
export const {setErrorData,setSuccesData,setClearData}=messageSlice.actions;
export default messageSlice.reducer;//estoy exportando el campo 'reducers' de authSlice