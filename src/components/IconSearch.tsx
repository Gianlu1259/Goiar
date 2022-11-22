import { FunctionComponent } from "react";
import styled from "styled-components";

interface IconSerachProps {
    
}
 
const IconSerach: FunctionComponent<IconSerachProps> = () => {
    return ( 
        <>
            <Container/>
        </>
     );
}
const Container=styled.button`
cursor: pointer;
    top: 0;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 100%;
    ::after {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        border-radius: 3px;
        width: 2px;
        height: 8px;
        background: currentColor;
        transform: rotate(-45deg);
        top: 10px;
        left: 12px;
    }
`
export default IconSerach;