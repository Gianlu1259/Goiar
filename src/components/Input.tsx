import { FunctionComponent } from "react";
import styled from "styled-components";

interface InputProps { 
    title:string,
    name:string,
    type:string,
    placeholder:string,
    value:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>,
}
 
const Input: FunctionComponent<InputProps> = ({ title, placeholder, type, name, onChange,value }) => {
    return <Container className="content d-flex flex-column mb-4 position-relative" data-aos="fade">
    <span>{title}</span>
    <div>
      <InputForm
        value={value}
        type={type}
        className="form-control effect-5 position-relative"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        required={true}
      />
      
    </div>
  </Container>
}
const Container = styled.div`
    position: relative;
    margin-bottom: 4px;
    &>span{
        font-size: 45px;
    }
    &>div{
        height: 40px;
    }
`
const InputForm = styled.input`
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    color: #706f6f;
    font-size: 20px;
    &:focus {
        background-color: transparent;
        outline: none;
        box-shadow: 0px;
    }
    &:active {
        background-color: transparent;
        outline: none;
        box-shadow: 0px;
    }
`
export default Input;