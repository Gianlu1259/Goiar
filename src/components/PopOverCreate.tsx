import { FunctionComponent } from "react";
import styled from "styled-components";
import { useCustomSelector } from "../hooks/redux";

interface PopOverCreateProps {
    
}
 
const PopOverCreate: FunctionComponent<PopOverCreateProps> = () => {
    const {note}=useCustomSelector((state)=>state)

    return ( 
        <>
            {
                note.popOver?
                    <Container>
                        
                    </Container>
                :null
            }
        </>
        
     );
}

const Container = styled.div`
    z-index: 1;
    background-color: #d9d9d9;
    height: 500px;
    width: 700px;
    position: absolute;
    position: absolute;
    top: 20%;
    left: 32%;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 16px 5px rgba(0,0,0,0.76);
    
    
`
export default PopOverCreate;