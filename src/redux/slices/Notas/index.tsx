import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";
import { db } from "../../../firebase/config";
import { NoteData } from "../../../types/NoteType"; 
import { Thunk } from "../../store";

export interface INotes {
    notes:Array<NoteData>;
    lastVisible :number,
    popOver:boolean
}

const initialState:INotes={
    notes:[],
    lastVisible:1,
    popOver:true
}

const noteSlice=createSlice({
    name:'note',
    initialState,
    reducers:{
        setNotesData:(state,action:PayloadAction<Array<NoteData>>)=>{
            state.notes=action.payload
        },
        setPopOver: (state,action:PayloadAction<boolean>) => {
            state.popOver = action.payload;
          },
    }
})
export const {setNotesData}=noteSlice.actions;
export default noteSlice.reducer;//estoy exportando el campo 'reducers' de authSlice

export const createNote = 
    (data:NoteData): Thunk =>
    async (dispatch) :Promise<any>=>{
    try{
        return db.collection('Notas').add(data)
        
    }catch(error){
        return error as Promise<UserCredential>;
    }
}
export const deleteNote = 
    (noteId:string): Thunk =>
    async (dispatch) :Promise<any>=>{
    try{
        await db.collection('Notas').doc(noteId).delete().then((res)=>{
            alert(res)
        }).catch((e)=>{
            console.log(e)
        })
        
    }catch(error){
        return error as Promise<UserCredential>;
    }
}
export const searchNotes = 
    (userId:string): Thunk =>
    async (dispatch) :Promise<any>=>{
    try{
        db.collection('/Notas')
        .where('UserId','==',userId)
        .get().then((res)=>{
            var array:Array<any>=[];
            res.docs.forEach(doc=>{
                const note=doc.data() as NoteData;
                note.id=doc.id;
                array.push(note)
            })
            dispatch(setNotesData(array))
        })
    }catch(error){
        return error as Promise<UserCredential>;
    }
}