import { FunctionComponent } from "react";
import styled from "styled-components";

interface InputLoginProps { 
    title:string,
    name:string,
    type:string,
    placeholder:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>
}
 
const InputLogin: FunctionComponent<InputLoginProps> = ({ title, placeholder, type, name, onChange }) => {
    return <Container className="content d-flex flex-column mb-4 position-relative" data-aos="fade">
    <span>{title}</span>
    <div>
      <Input
        type={type}
        className="form-control effect-5 position-relative"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className="focus-border"></span>
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
const Input = styled.input`
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    color: white;
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
export default InputLogin;