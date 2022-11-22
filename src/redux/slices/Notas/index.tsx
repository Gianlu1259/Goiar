import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";
import { db } from "../../../firebase/config";
import { NoteCreate } from "../../../pages/Home/Home";
import { NoteData } from "../../../types/NoteType"; 
import { Thunk } from "../../store";

export interface INotes {
    notes:Array<NoteData>;
    lastVisible :number,
    countNotes:number,
    popOver:boolean,
    viewDetail:boolean
}

const initialState:INotes={
    notes:[],
    lastVisible:1,
    countNotes:0,
    popOver:false,
    viewDetail:false
}

const noteSlice=createSlice({
    name:'note',
    initialState,
    reducers:{
        setNotesData:(state,action:PayloadAction<Array<NoteData>>)=>{
            state.notes=action.payload
        },
        setLastVidible:(state)=>{
            state.lastVisible=state.lastVisible+1

        },
        setCountNote:(state,action:PayloadAction<number>)=>{
            state.countNotes=action.payload;

        },
        setPopOver: (state,action:PayloadAction<boolean>) => {
            state.popOver = action.payload;
          },
          setViewCard:(state,action:PayloadAction<boolean>)=>{
            state.viewDetail=action.payload;
        }
    }
})
export const {setNotesData,setPopOver,setLastVidible,setCountNote,setViewCard}=noteSlice.actions;
export default noteSlice.reducer;//estoy exportando el campo 'reducers' de authSlice

export const createNote = 
    (data:NoteCreate): Thunk =>
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
        }).catch((e)=>{
        })
        
    }catch(error){
        return error as Promise<UserCredential>;
    }
}
export const searchNotes = 
    (userId:string,lastLimit:number): Thunk =>
    async (dispatch) :Promise<any>=>{
    try{
        var array:Array<any>=[];
        var ref=db.collection('/Notas').where('UserId','==',userId)
        ref.get().then((res)=>{console.log(res.docs);dispatch(setCountNote(res.docs.length))})
        
        ref.orderBy('Fecha','asc').get()
        await ref.limit((8*lastLimit)).get().then(function(snapshot) {
            snapshot.forEach((doc)=>{
              const note=doc.data() as NoteData;
              note.id=doc.id;
              array.push(note)
            });
            dispatch(setNotesData(array))
            
          });
    } 
    catch(error){
        return error as Promise<UserCredential>;
    }
}