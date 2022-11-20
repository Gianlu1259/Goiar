import { FunctionComponent } from "react";
import styled from "styled-components";
import { NoteData } from "../types/NoteType";
import Card from "./Card";

interface ContainerCardsProps {
    arrayNotes:Array<NoteData>,
}
 
const ContainerCards: FunctionComponent<ContainerCardsProps> = ({arrayNotes}) => {
    return ( 
        <Container>
            {
                arrayNotes.map((note)=>{
                    return <Card note={note}/>
                })
            }
        </Container>
     );
}
const Container = styled.div`
    padding: 60px;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    height: fit-content;
    width: 100%;
    text-align: start;
    height: auto;
`
export default ContainerCards;