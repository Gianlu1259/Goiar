import { FunctionComponent } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

interface LoyautFormsProps {
    children:React.ReactNode
}
 
const LoyautForms: FunctionComponent<LoyautFormsProps> = ({children}) => {
    return ( 
        <>
        <NavBar/>
        <Container>
            <InfoContainer>
                <Title>
                    Note Express
                </Title>
            </InfoContainer>

            <FormContainer>
                <>{children}</>
            </FormContainer>
        </Container>
        </>
     );
}
export const Container = styled.div`
    display: flex;   
    
`
export const InfoContainer = styled.div`
    height: 100vh;
    width: 50%;
    background-color:#112f58;
    position: relative;
    @media (max-width:850px) {
     display: none;
    }
`
export const Title = styled.h2`
    Font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
    font-size: 90px;
    width: max-content;
    position: absolute;
    color: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width:1110px) {
     font-size: 70px;
    }
`
export const FormContainer = styled.div`
position: relative;
    height: 100vh;
    width: 50%;
    background-color:#36dd81;
    @media (max-width:850px) {
     width: 100%;
     text-align: center;
    }
    
`
export default LoyautForms;