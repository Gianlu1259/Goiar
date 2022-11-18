import { getAuth } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

interface PublicRoutesProps {
    children: React.ReactNode
}
 
const PublicRoutes: React.FunctionComponent<PublicRoutesProps> = (props) => {
    
    const {children}=props;
    console.log(children)
    const auth=getAuth();//me devuelve el AuthContext donde esta la info del user
    const navigate=useNavigate();
    console.log('holaaaaaaaaaaaaaaaaaa')
    //if(auth) navigate('/Home')
    return (<>{children}</>)
    
}
 
export default PublicRoutes;