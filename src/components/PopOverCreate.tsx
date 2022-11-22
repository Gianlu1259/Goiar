import { FunctionComponent } from "react";
import { Timestamp } from 'firebase/firestore';
import styled from "styled-components";
import { useCustomDispatch, useCustomSelector } from "../hooks/redux";
import { NoteCreate } from '../pages/Home/Home';
import { setPopOver } from '../redux/slices/Notas';
import Input from './Input';
import Textarea from "./Texarea";
import tiposNota from '../utils/TypeNotes'

interface PopOverCreateProps {
    formData:NoteCreate;
    setFormData: React.Dispatch<React.SetStateAction<NoteCreate>>,
    handleCreateNote:Function;
}
interface PropsStyled {
    mostrar:boolean;
    
  }
const PopOverCreate: FunctionComponent<PopOverCreateProps> = (props) => {
    const {note}=useCustomSelector((state)=>state)
    const dispatch=useCustomDispatch()
    const closePopover=()=>{
        props.setFormData({
            Titulo:'',
            Tipo:'',
            Descripcion:'',
            UserId:'',
            Fecha:Timestamp.fromDate(new Date())
          })
        dispatch(setPopOver(false));
    }
    const handleTipo=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        const { name, value } = e.target;
        props.setFormData({ ...props.formData, [name]: value });
    }
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        props.setFormData({ ...props.formData, [name]: value });
      };
    return ( 
        <>
        {
            note.popOver?
            <Create mostrar={note.popOver} >
            <Container>
                <DeleteButton>
                    <IconDelete onClick={()=>{closePopover()}}>
                        <span>X</span>
                    </IconDelete>
                </DeleteButton>
                <H2>
                    <h2>Nueva nota +</h2>
                </H2>
                <Form>
                    <Input
                        value={props.formData.Titulo}
                        title="Titulo"
                        type="text"
                        name="Titulo"
                        placeholder="Ingresa el titulo de la nota"
                        onChange={handleInputChange}
                    />
                    <Textarea
                        value={props.formData.Descripcion}
                        title="Descripcion"
                        type="textarea"
                        name="Descripcion"
                        placeholder="Ingresa la descripcion de la nota"
                        onChange={handleInputChange}
                    />
                    <Tipo>
                        <h2>
                            Tipo
                        </h2>
                        <Select value={props.formData.Tipo} name='Tipo' onChange={handleTipo}>
                        <option value="" selected disabled hidden>Seleccionar tipo de nota</option>
                            {
                                tiposNota.map((tipo)=>{
                                    return <option style={{cursor:'pointer'}} value={tipo}>{tipo}</option>
                                })
                            }
                        </Select>
                    </Tipo>
                    <Boton>
                        <button onClick={()=>{props.handleCreateNote()}}>
                            Crear nota
                        </button>
                    </Boton>
                </Form>
            </Container>
        </Create>:
        null
        }
        
            
        </>
     );
}
const Create = styled.div<PropsStyled>`
    width: 100%;
    height: 100%;
    bottom: 60%;
    position: sticky;
    -webkit-transform:${p=>p.mostrar?'scale(1.1, 1.1)':'scale(0, 0)'};
`
const Boton = styled.div`
    height: 50px;
    width: 100%;
    text-align: center;
    margin-top: 15px;
    &>button{
        cursor: pointer;
        height: 40px;
        padding: 0px 15px;
        color: #318aac;
        font-size: 20px;
        font-weight: 500;
        background: rgba(0,0,0,0);
        border: 1px solid;
        border-radius: 15px;
        border-color: black;
        transition: all 0.4s ease;
        :hover{
            background-color: #0af906;
            color: black;
        }
    }
`
const Tipo = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: self-end;
    &>h2{
        font-weight: 500;
        margin: 0;
        font-size: 25px;
    }
`
const Select = styled.select`
    transition: 0.2s;
    cursor: pointer;
    padding-left: 10px;
    font-size: 20px;
    margin-left: 10px;
    background-color: #d5cece;
    border: 1px solid #555454;
    
    border-radius: 15px;
    outline: none;
    color: white;
    
`
const Form = styled.div`
     padding: 25px;
     &>div{
        &>span{
            font-size: 25px !important;
        }
     }
`
const Container = styled.div`
    transition: all 0.3s;
    z-index: 1;
    background-color: #ffffff;
    height:410px;
    width:500px;
    margin: auto;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 16px 5px rgba(0,0,0,0.76);
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
export default PopOverCreate;