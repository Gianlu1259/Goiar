import { FunctionComponent } from "react";
import styled from "styled-components";

interface TextareaProps { 
    title:string,
    name:string,
    type:string,
    placeholder:string,
    value:string,
    onChange:React.ChangeEventHandler,
}
 
const Textarea: FunctionComponent<TextareaProps> = ({ title, placeholder, name, onChange, value }) => {
    return <Container >
    <span>{title}</span>
    <div>
      <TextareaForm
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        required={true}
        cols={10}
        rows={50}
        value={value}
      />
      
    </div>
  </Container>
}
const Container = styled.div`
    position: relative;
    margin-bottom: 60px;
    &>span{
        font-size: 45px;
    }
    &>div{
        height: 40px;
    }
`
const TextareaForm = styled.textarea`
    width: 100%;
    height: 4em; /* a bit less than four lines to demonstrate scrolling */
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    color: #706f6f;
    font-size: 20px;
    resize: none;
    rows:10;
    cols:50;
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
export default Textarea;