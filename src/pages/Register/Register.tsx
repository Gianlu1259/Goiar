import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormRegister from "../../components/FormRegister";
import LoyautForms from "../../components/LoyautForm";
import NavBar from "../../components/NavBar";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import { registerUser } from "../../redux/slices/auth";
import { setClearData, setErrorData } from "../../redux/slices/Messages";
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
                dispatch(registerUser(formData)).then(()=>{
                    dispatch(setClearData())
                    navigate('/home')
                }).catch((e)=>{
                    dispatch(setErrorData('Los campos estan incompletois o ya existe un usuario con ese corrreo'))
                })
            }else{
                dispatch(setErrorData('Contraseñas distintas'))
            }
            
    }
    return (
        <>
        <LoyautForms>
            <FormRegister handleInputChange={handleInputChange} handleRegister={handleLogin} email={formData.email} password={formData.password} password2={formData.password2}/>
        </LoyautForms>
        </>
    );
}
export const Container = styled.div`
    display: flex;   
    
`
export const InfoContainer = styled.div`
    height: 100vh;
    width: 50%;
    background-color: #112f58;
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
    background-color: #36dd81;
    
`
export default Register;