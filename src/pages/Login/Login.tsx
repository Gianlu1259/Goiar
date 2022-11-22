import { useCustomDispatch } from '../../hooks/redux';
import { login } from '../../redux/slices/auth';
import styled from "styled-components"
import { useState } from 'react';
import { LoginData } from '../../types/loginType';
import FormLogin from '../../components/FormLogin';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import LoyautForms from '../../components/LoyautForm';

const Login: React.FC= () => {
    const initialValues: LoginData = {
        email: '',
        password: ''
      };
      const [formData, setFormData] = useState<LoginData>(initialValues);
    const dispatch=useCustomDispatch();
    const navigate=useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleLogin = async() => {
        if(formData.email!=='' || formData.password!==''){
            dispatch(login(formData)).then((res)=>{
                navigate('/home');
            }).catch((e)=>{
                alert(e);
        })
        }
    }
    return (  
        <>
        <LoyautForms>
            <FormLogin handleInputChange={handleInputChange} handleLogin={handleLogin} email={formData.email} password={formData.password}/>
        </LoyautForms>
        {/*<NavBar/>
        <Container>
            <InfoContainer>
                <Title>
                    Note Express
                </Title>
            </InfoContainer>

            <FormContainer>
                <FormLogin handleInputChange={handleInputChange} handleLogin={handleLogin} email={formData.email} password={formData.password}/>
            </FormContainer>
    </Container>*/}
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

export default Login;