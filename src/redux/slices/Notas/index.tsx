import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";
import { rmSync } from "fs";
import { db } from "../../../firebase/config";
import { NoteCreate } from "../../../pages/Home/Home";
import { IFilter } from "../../../types/NoteSerach";
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
        resetLastVisible:(state)=>{
            state.lastVisible=1;
        },
        setPopOver: (state,action:PayloadAction<boolean>) => {
            state.popOver = action.payload;
          },
          setViewCard:(state,action:PayloadAction<boolean>)=>{
            state.viewDetail=action.payload;
        }
    }
})
export const {setNotesData,setPopOver,setLastVidible,setCountNote,setViewCard,resetLastVisible}=noteSlice.actions;
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
export const filterNote = 
    (userId:string,filter:IFilter): Thunk =>
    async (dispatch) :Promise<any>=>{
    try{
        var filterInput:any;
        var array:Array<any>=[];
        var ref=db.collection('Notas').where('UserId','==',userId);
        
            if(filter.tipo!==''){
            filterInput=await ref.where('Tipo','==',filter.tipo).get()
            if(filterInput?.size!==0 && filter.input!==''){
                filterInput= await ref.where('Titulo','==',filter.input).where('Tipo','==',filter.tipo).get()
                if(filterInput.size===0) filterInput= await ref.where('Descripcion','==',filter.input).where('Tipo','==',filter.tipo).get()
                console.log(filterInput.size)
            }
            }else{
                if(filter.input!=='')filterInput= await ref.where('Titulo','==',filter.input).get()
                if( filterInput?.size===0) filterInput= await ref.where('Descripcion','==',filter.input).get()
            }
        
        
         filterInput?.docs.forEach((doc:any)=>{
            const note=doc.data() as NoteData;
              note.id=doc.id;
              array.push(note)
        })
        dispatch(setCountNote(array.length))
        dispatch(setNotesData(array))
    }catch(error){
        return error as Promise<any>;
    }
}
export const notesUser = 
    (userId:string,lastLimit:number): Thunk =>
    async (dispatch) :Promise<any>=>{
    try{
        var array:Array<any>=[];
        var ref=db.collection('/Notas').where('UserId','==',userId)
        ref.get().then((res)=>{;dispatch(setCountNote(res.docs.length))})
        
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