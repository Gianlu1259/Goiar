import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormRegister from "../../components/FormRegister";
import { useCustomDispatch } from "../../hooks/redux";
import { registerUser } from "../../redux/slices/auth";
import { RegisterData } from "../../types/RegisterData";

interface RegisterProps {
    
}
    
const Register: FunctionComponent<RegisterProps> = () => {
    const initialValues: RegisterData = {
        email: '',
        name:'',
        password: '',
        password2:''
      };
      const [formData, setFormData] = useState<RegisterData>(initialValues);
    const dispatch=useCustomDispatch();
    const navigate=useNavigate();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
        const handleLogin = async() => {
            if(formData.password===formData.password2){
                dispatch(registerUser(formData)).then((res)=>{
                    navigate('/home')
                }).catch((e)=>{
                    alert(e)
                })
            }else{
                alert("contraseños distintas");
            }
            
    }
    return (
        <>
            <Container>
            <InfoContainer>
                <Title>
                    Mis notas
                </Title>
            </InfoContainer>

            <FormContainer>
                <FormRegister handleInputChange={handleInputChange} handleRegister={handleLogin}/>
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
    background-color: #64d1bf;
    position: relative;
`
export const Title = styled.h2`
    Font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
    font-size: 50px;
    position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const FormContainer = styled.div`
position: relative;
    height: 100vh;
    width: 50%;
    background-color: #35465d;
    
`
export default Register;