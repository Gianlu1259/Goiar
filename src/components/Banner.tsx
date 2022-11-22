import { FunctionComponent,useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useCustomDispatch, useCustomSelector } from "../hooks/redux";
import { setLogoutData } from "../redux/slices/auth";
import { setPopOver } from "../redux/slices/Notas";
import tiposNota from '../utils/TypeNotes'
import IconSerach from "./IconSearch";
interface BannerProps {
    handleSearchNote:any
}
interface PropsStyled {
    backGroundHover:any;
    marginButtom:any;
  }
const Banner: FunctionComponent<BannerProps> = ({handleSearchNote}) => {
    const dispatch=useCustomDispatch();
    const navigate=useNavigate()
    const [select, setSelect] = useState('');
    const [input, setInput] = useState('');
    const {auth}=useCustomSelector((state)=>state)
    const handleTipo=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setSelect(event.target.value)
    }
    const handleDescription=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
    }
    const handleSubmit=()=>{
        handleSearchNote({tipo:select,input})
    }
    const openPopover=()=>{
        dispatch(setPopOver(true));
    }
    const Logout=()=>{
        dispatch(setLogoutData())
        navigate('/')
    }
    return ( 
        <Container>
            <ContainerOptions>
                <Title>
                    {auth.email}
                </Title>
                <ContainerButtons>
                    <Button onClick={()=>{Logout()}} backGroundHover={'red'} marginButtom={null}>Sign out</Button>
                    <Button onClick={()=>{openPopover()}} backGroundHover={'#0af906'} marginButtom={'0'}>Crear nota</Button>
                </ContainerButtons>
            </ContainerOptions>

            <FormSearch>
                <Input
                        placeholder="Filtrar por Titulo o Descripcion"
                        //value={descripcion}
                        onChange={handleDescription}
                    />
                    <Select value={select} onChange={handleTipo}>
                    <option value="">Filtrar por tipo de nota</option>
                        {
                            tiposNota.map((tipo)=>{
                                return <option style={{cursor:'pointer'}} value={tipo}>{tipo}</option>
                            })
                        }
                    </Select>
                    <Search onClick={()=>{handleSubmit()}}>
                        <IconSerach />
                    </Search>
                    
            </FormSearch>
                
            
            
        </Container>
     );
}
const Search=styled.div`
    height: 30px;
    width: 30px;
    cursor: pointer;
    margin-left: 10px;
    :hover{
    transition: 0.2s;
        -webkit-transform:scale(1.5, 1.5);
        
    }
`

const Container = styled.div`
    text-align: center;
`
const Input = styled.input`
transition: 0.2s;
    margin-top: 15px;
    margin-right:20px;
    
    background-color: white;
    border: 1px solid #555454;
    font-size: 20px;
    height: 30px;
    width: 80%;
    border-radius: 20px;
    color: #706f6f;
    padding: 5px;
    outline: none;
    ::placeholder{
        font-weight: 500;
        color: #706f6f;
    }
    :focus {
        border:1px solid white;
}
      
`
const Select = styled.select`
    transition: 0.2s;
    cursor: pointer;
    margin-top: 15px;
    font-size: 20px;
    margin-left: 10px;
    background-color: white;
    border: 1px solid #555454;
    height: 45px;
    width: 80%;
    border-radius: 20px;
    outline: none;
    color: #706f6f;
    &>option{
        cursor: pointer;
    }
    ::placeholder{
        font-weight: 500;
        color: #706f6f;
    }
    :focus {
        border:1px solid white;
    }
`
const FormSearch = styled.div`
    width: 100%;
    align-items: self-end;
    text-align: center;
    display: flex;
`
const ContainerOptions = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    
    
`
const Title = styled.h2`
    color: black;
    font-size: 30px;
    margin-bottom: 0;
`
const ContainerButtons = styled.div`
    float: right;
    display: block;
    text-align: -webkit-right;
    width: 100%;
`
const Button = styled.button<PropsStyled>`
    cursor: pointer;
    display: block;
    margin: 15px 0px;
    margin-bottom: ${p=>p.marginButtom};
    border-radius: 25px;
    border: none;
    color: white;
    background: #1818d8;
    font-size: 20px;
    font-weight: 500;
    padding: 0.5em 1.2em;
    transition: all 0.5s ease;
    position: relative;
    :hover{
        background: ${p => p.backGroundHover? p.backGroundHover : '#d5cece'};
        color: #fff !important; 
    }
`
export default Banner;
