import { Timestamp } from "firebase/firestore";

export interface NoteData {
    id:string
    Titulo:string;
    Tipo:string;
    Descripcion:string;
    UserId:string;
    Fecha:Timestamp
  }