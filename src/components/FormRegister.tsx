import { FunctionComponent } from "react";
import styled from "styled-components";
import InputLogin from "./Input";

interface FormRegisterProps {
    handleInputChange:any,
    handleRegister:any
}
 
const FormRegister: FunctionComponent<FormRegisterProps> = ({handleInputChange,handleRegister}) => {
    return ( 
         <Container>
                <InputLogin
                    title="E-MAIL"
                    type="email"
                    name="email"
                    placeholder="Ingresa tu correo electrónico"
                    onChange={handleInputChange}
                />
                <InputLogin
                    title="CONTRASEÑA"
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={handleInputChange}
                />
                <InputLogin
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
const Container = styled.div`
    position: absolute;
    margin-bottom: 4px;
    top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export default FormRegister;