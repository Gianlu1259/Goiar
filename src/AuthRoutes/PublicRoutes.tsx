import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomSelector } from "../hooks/redux";

interface PublicRoutesProps {
    children: React.ReactNode
}
 
const PublicRoutes: React.FunctionComponent<PublicRoutesProps> = ({children}) => {
    const {auth}=useCustomSelector((state)=>state)
    const navigate=useNavigate();
    useEffect(() => {
      AuthCheck();
    }, [auth])
    
    const AuthCheck=()=>{
        if(auth.id!==''){
            navigate('/home')
        }
    }
    return (<>{children}</>)
    
}
 
export default PublicRoutes;