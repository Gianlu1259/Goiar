import { FunctionComponent } from "react";
import styled from "styled-components";
import { NoteData } from "../types/NoteType";
import Card from "./Card";

interface ContainerCardsProps {
    arrayNotes:Array<NoteData>,
    setSelectedNote:any
}
 
const ContainerCards: FunctionComponent<ContainerCardsProps> = ({arrayNotes,setSelectedNote}) => {
    return ( 
        <Container>
            {
                arrayNotes.map((noteData)=>{
                    return <Card setSelectedNote={setSelectedNote} noteData={noteData}/>
                })
            }
        </Container>
     );
}
const Container = styled.div`
    padding: 60px 0px;
    padding-bottom: 20px;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    height: fit-content;
    //width: 100%;
    text-align: start;
    height: auto;
`
export default ContainerCards;