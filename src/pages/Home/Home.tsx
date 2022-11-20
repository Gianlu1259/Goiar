import { Timestamp } from 'firebase/firestore';
import React, {useEffect}from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/redux';
import { createNote, deleteNote, searchNotes } from '../../redux/slices/Notas';
import { NoteData } from '../../types/NoteType';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import { NoteSearch } from '../../types/NoteSerach';
import ContainerCards from '../../components/ContainerCards';
import PopOverCreate from '../../components/PopOverCreate';

const Home: React.FC = () => {
  const {auth, note}=useCustomSelector((state)=>state)
  
  const initialValues: NoteData = {
    id:'',
    Titulo:'',
    Tipo:'',
    Descripcion:'',
    UserId:'',
    Fecha:Timestamp.fromDate(new Date())
  };
  const dispatch=useCustomDispatch();

  useEffect(() => {
    dispatch(searchNotes(auth.id))
  }, [])
  
  const handleSearchNote=async(form:NoteSearch)=>{
    /*await dispatch(searchNote(auth.id)).then((res)=>{
      console.log(note.notes)
    })*/
  }
  
    const handleCreateNote=()=>{
      dispatch(createNote(initialValues))
        .then((res)=>{
          alert('nota creada');
        })
        .catch((e)=>{
          alert('error');
        })
    }
  return (
    <Container>
      
        <Banner handleSearchNote={handleSearchNote}/>
        <ContainerCards arrayNotes={note.notes}/>
        <PopOverCreate/>
      
    </Container>
  )
}

const Container = styled.div`
    padding: 0px 200px;
    padding-top: 60px;
    background-color: #64d1bf;
    //position: relative;
    height: 100vh;
`
export default Home