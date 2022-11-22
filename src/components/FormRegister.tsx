import { FunctionComponent } from "react";
import styled from "styled-components";
import Input from "./Input";

interface FormRegisterProps {
    handleInputChange:any,
    handleRegister:any,
    email:string,
    password:string,
    password2:string
}
 
const FormRegister: FunctionComponent<FormRegisterProps> = ({handleInputChange,handleRegister,email,password,password2}) => {
    return ( 
         <Container>
                <Input
                value={email}
                    title="E-MAIL"
                    type="email"
                    name="email"
                    placeholder="Ingresa tu correo electrónico"
                    onChange={handleInputChange}
                />
                <Input
                value={password}
                    title="CONTRASEÑA"
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={handleInputChange}
                />
                <Input
                value={password2}
                    title="Confirmar contraseña"
                    type="password"
                    name="password2"
                    placeholder="Confirmar contraseña"
                    onChange={handleInputChange}
                />
                <button type="submit" onClick={handleRegister}>
                    Ingresar
                </button>
            </Container>
     );
}
export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &>div{
        &>span{
            color:white;
        }
        input{
            color:white;
        }
    }
    &>button{
        cursor: pointer;
        margin-top: 15px;
        height: 40px;
        width: 150px;
        font-size: 20px;
        font-style: italic;
        font-weight: 700;
        border-radius: 20px;
        border: none;
        color: white;
        background-color: #1818d8;
    }
`
export default FormRegister;