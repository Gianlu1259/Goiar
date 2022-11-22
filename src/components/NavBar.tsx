import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    const navigate=useNavigate();
    return ( 
        <Container>
            <Redirects>
                <button onClick={()=>navigate('/')}>Iniciar sesion</button>
                <button onClick={()=>navigate('/register')}>Registrarse</button>
            </Redirects>
        </Container>
     );
}
export const Container = styled.div`
    height:60px ;
    background-color:#00193a;
    position: absolute;
    z-index: 1;
    width: 100%;
`
export const Redirects = styled.div`
float: right;
     &>button{
        font-size: 20px;
        cursor: pointer;
        background: none;
        border: 0;
        color: white;
        //font: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        margin: 15px 20px;
        display: inline-block;
        position: relative;
        color: white;
        text-decoration: none;
        :after {
            content: "";
            display: block;
            margin: auto;
            height: 2px;
            width: 0px;
            transition: all 0.3s;
        }
        :hover:after {
width: 100%;
background: white;
}
     }
    
`
export default NavBar;