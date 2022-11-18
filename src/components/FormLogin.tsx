import { FunctionComponent } from "react";
import styled from "styled-components";
import InputLogin from "./Input";

interface FormLoginProps {
    handleInputChange:any,
    handleLogin:any
}
 
const FormLogin: FunctionComponent<FormLoginProps> = ({handleInputChange,handleLogin}) => {
    return <Container>
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
<button type="submit" onClick={handleLogin}>
Ingresar
</button>
    </Container>
}
export const Container = styled.div`
    position: absolute;
    margin-bottom: 4px;
    top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export default FormLogin;