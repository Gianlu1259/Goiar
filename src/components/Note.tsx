import { FunctionComponent } from "react";
import styled from "styled-components";
import { useCustomDispatch, useCustomSelector } from "../hooks/redux";
import { setViewCard } from "../redux/slices/Notas";
import { NoteData } from "../types/NoteType";

interface NoteProps {
    selectNote:NoteData |undefined
}
interface PropsStyled {
    mostrar:boolean;
    
}
const Note: FunctionComponent<NoteProps> = ({selectNote}) => {
    const dispatch=useCustomDispatch()
    const closePopover=()=>{
        dispatch(setViewCard(false));
    }
    const {note}=useCustomSelector((state)=>state)
    return ( 
        <Container mostrar={note.viewDetail}>
                <DeleteButton>
                    <IconDelete onClick={()=>{closePopover()}}>
                        <span>X</span>
                    </IconDelete>
                </DeleteButton>
                <H2>
                    <h2>{selectNote?.Titulo}</h2>
                </H2>
                {selectNote?.Tipo===""?null:
                    <Tipo>
                        <h2>{selectNote?.Tipo}</h2>
                    </Tipo>
                }
                <Descripcion>
                <h3>
                    {selectNote?.Descripcion}
                </h3>
            </Descripcion>
            <Time>
                <h3>{selectNote?.Fecha.toDate().toLocaleDateString()}</h3>
            </Time>
        </Container>
     );
}
const Descripcion = styled.div`
    text-align: center;
    padding: 0px 10px;
    
    top: 0;
    text-overflow: ellipsis;
    &>h3{
        font-size: 15px;
        white-space: initial;
        text-overflow: ellipsis;
        
    }
`
const Tipo = styled.div`
    width: fit-content;
    padding:0px 20px;
    height: 30px;
    border-radius: 10px;
    background-color: #666666;
    color: white;
    margin: 10px;
    &>h2{
        margin: 0px;
        font-weight: 500;
        font-size: 20px;
    }
`
const Time = styled.div`
    text-align: center;
    bottom: 25px;
    position: absolute;
    width: 100%;
    &>h3{
        margin: 0;
        font-weight: 700;
        text-decoration: underline;
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
const IconDelete = styled.div`
    text-align: center;
    cursor: pointer;
    
    &>span{
        transition: 0.2s;
        position: absolute;
        font-weight: 700;
        font-size: 20px;
        width: 20px;
        right: 15px;
        bottom: 0px;   
    }
    :hover{
        &>span{
            -webkit-transform:scale(1.5, 1.5);
        }
    }
`
const Container = styled.div<PropsStyled>`
    transition: all 0.3s;
    z-index: 1;
    background-color: #ffff;
    height:410px;
    width:445px;
    -webkit-transform:${p=>p.mostrar?'scale(1.1, 1.1)':'scale(0, 0)'};
    position: absolute;
    top: 30%;
    left: 40%;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 16px 5px rgba(0,0,0,0.76);
    //display: ${p=>p.mostrar?'block':'none'};
`
export default Note;