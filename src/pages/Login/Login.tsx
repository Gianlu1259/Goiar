import { signInWithEmailAndPassword,getAuth } from 'firebase/auth' 
import { useCustomDispatch } from '../../hooks/redux';
import { setAccesToke } from '../../redux/slices/auth';
import styled from "styled-components"
import { useState } from 'react';
import { LoginData } from '../../types/loginType';
import InputLogin from '../../components/Input';
import FormLogin from '../../components/FormLogin';
import { useNavigate } from 'react-router-dom';
const Login: React.FC= () => {
    const initialValues: LoginData = {
        email: '',
        password: ''
      };
      const [formData, setFormData] = useState<LoginData>(initialValues);
    const auth=getAuth();
    const dispatch=useCustomDispatch();
    const navigate=useNavigate();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
      };
        const handleLogin = async() => {
            await signInWithEmailAndPassword(auth,formData.email,formData.password).then((res)=>{
                res.user.getIdToken().then((token)=>{
                    dispatch(setAccesToke(token))
                    navigate('/home')
                })
            }).catch((e)=>alert(e))
    }
    return (  
        <Container>
            <InfoContainer>
                <Title>
                    Mis notas
                </Title>
            </InfoContainer>

            <FormContainer>
                <FormLogin handleInputChange={handleInputChange} handleLogin={handleLogin}/>
            </FormContainer>
        </Container>
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

export default Login;