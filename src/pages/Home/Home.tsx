import { Timestamp } from 'firebase/firestore';
import React, {useEffect,useState}from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/redux';
import { createNote, searchNotes, setLastVidible, setPopOver } from '../../redux/slices/Notas';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import { NoteSearch } from '../../types/NoteSerach';
import ContainerCards from '../../components/ContainerCards';
import PopOverCreate from '../../components/PopOverCreate';
import { NoteData } from '../../types/NoteType';
import Note from '../../components/Note';

export interface NoteCreate{
  Titulo:string
  Tipo:string
  Descripcion:string
  UserId:string;
  Fecha:Timestamp;
}

const Home: React.FC = () => {
  
  const {auth, note}=useCustomSelector((state)=>state)
  const dispatch=useCustomDispatch();
  const initialValues: NoteCreate = {
    Titulo:'',
    Tipo:'',
    Descripcion:'',
    UserId:auth.id,
    Fecha:Timestamp.fromDate(new Date())
  };
  
  const [formData, setFormData] = useState<NoteCreate>(initialValues);
  const [selectedNote, setSelectedNote] = useState<NoteData>();

  useEffect(() => {
    dispatch(searchNotes(auth.id,note.lastVisible))
  }, [])
  useEffect(() => {
    dispatch(searchNotes(auth.id,note.lastVisible))
  }, [note.lastVisible])

  const handleViewMore=async()=>{
    dispatch(setLastVidible());
  }
  const handleSearchNote=async(form:NoteSearch)=>{
    
  }
  const handleCreateNote=()=>{
    if(formData.Descripcion.trim().length===0 || formData.Titulo.trim().length===0){
      alert('el titulo o el espacio deben bla bla bla')
    }else{
      formData.UserId=auth.id;
      dispatch(createNote(formData)).then(()=>{
        dispatch(setPopOver(false))
        dispatch(searchNotes(auth.id,note.lastVisible))
        setFormData({
          Titulo:'',
          Tipo:'',
          Descripcion:'',
          UserId:'',
          Fecha:Timestamp.fromDate(new Date())
        })
      })
    }
  }
  return (
    <Container>
        <Banner handleSearchNote={handleSearchNote}/>
        <ContainerCards arrayNotes={note.notes} setSelectedNote={setSelectedNote}/>
        {
          note.countNotes!==note.notes.length?
          <ViewMore>
          <Button onClick={()=>{handleViewMore()}}>Ver mas +</Button>
        </ViewMore>:null
        }
        <Note selectNote={selectedNote}/>
        <PopOverCreate formData={formData} setFormData={setFormData} handleCreateNote={handleCreateNote}/>
      
    </Container>
  )
}

const Container = styled.div`
    padding: 0px 200px;
    padding-top: 60px;
    background-color: #36dd81;
    //position: relative;
    min-height: 100vh;
`
const ViewMore = styled.div`
   
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
`
const Button = styled.button`
cursor: pointer;
    height: 40px;
    color: white;
    width: 200px;
    background-color: #36dd81;
    border: 3px solid #2db369;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    transition: 0.2s;
    :hover{
      -webkit-transform:scale(1.1, 1.1);
        -webkit-box-shadow: 0px 0px 16px 5px rgba(255,252,255,1);
        -moz-box-shadow: 0px 0px 16px 5px rgba(255,252,255,1);
        box-shadow: 0px 0px 16px 5px rgba(255,252,255,1);
    }
`
export default Home