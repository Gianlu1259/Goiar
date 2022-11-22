import { FunctionComponent } from "react";
import styled from "styled-components";
import { useCustomDispatch, useCustomSelector } from "../hooks/redux";
import { deleteNote, notesUser, setViewCard } from "../redux/slices/Notas";
import { NoteData } from "../types/NoteType";

interface CardProps {
    noteData:NoteData,
    setSelectedNote:any
}
 
const Card: FunctionComponent<CardProps> = ({noteData,setSelectedNote}) => {
    const {auth,note}=useCustomSelector((state)=>state)
    const dispatch=useCustomDispatch()
    const handleDeleteNote=(idNote:string)=>{
            dispatch(deleteNote(idNote))
            dispatch(notesUser(auth.id,note.lastVisible))
      }
      const viewCard=()=>{
        dispatch(setViewCard(true));
        setSelectedNote(noteData)
      }
    return ( 
        <Container >
            <DeleteButton>
                <IconDelete onClick={()=>{handleDeleteNote(noteData.id)}}>
                    <span>X</span>
                </IconDelete>
            
            </DeleteButton>
            <div onClick={()=>{viewCard()}}>
            <H2>
                <h2>{noteData.Titulo}</h2>
            </H2>
            <Descripcion>
                <h3>
                    {noteData.Descripcion}
                </h3>
            </Descripcion>
            <Time>
                <h3>{noteData.Fecha.toDate().toLocaleDateString()}</h3>
            </Time>
            </div>
        </Container>
     );
}
const Time = styled.div`
    text-align: center;
    &>h3{
        margin: 0;
        font-weight: 700;
        text-decoration: underline;
    }
`
const Descripcion = styled.div`
    text-align: center;
    padding: 10px;
    padding-top: 0;
    height: 150px;
    top: 0;
    text-overflow: ellipsis;
    &>h3{
        font-size: 15px;
        white-space: initial;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 7;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
`
const Container = styled.div`
    cursor: pointer;
    margin: 0px 25px;
    margin-bottom: 25px;
    transition: 0.2s;
    height:300px;
    width: 250px;
    background-color: #d9d9d9;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 16px 5px rgba(0,0,0,0.76);
    -moz-box-shadow: 0px 0px 16px 5px rgba(0,0,0,0.76);
    box-shadow: 0px 0px 16px 5px rgba(0,0,0,0.76);
    :hover{
        -webkit-transform:scale(1.1, 1.1);
        -webkit-box-shadow: 0px 0px 16px 5px rgba(255,252,255,1);
        -moz-box-shadow: 0px 0px 16px 5px rgba(255,252,255,1);
        box-shadow: 0px 0px 16px 5px rgba(255,252,255,1);
    }
`
const IconDelete = styled.div`
    text-align: center;
    &>span{
        transition: 0.5s;
        position: absolute;
        font-weight: 700;
        font-size: 20px;
        width: 20px;
        right: 15px;
        bottom: 0px;   
    }
    :hover{
        &>span{
            font-size: 20px;
            transform: rotate(360deg);
            color: red;
        }
    }
`
const DeleteButton = styled.div`
     position: relative;
     height: 30px;
`
const H2 = styled.div`
    text-align: center;
    &>h2{
        margin: 0;
        font-weight: 700;
        text-decoration: underline;
    }
`
export default Card;