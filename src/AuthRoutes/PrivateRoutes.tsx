import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useCustomSelector } from '../hooks/redux';
import { IComponentProps } from '../types/IComponentProps';


 
const PrivateRoutes: React.FunctionComponent<IComponentProps> = ({children}) => {
    const {auth}=useCustomSelector((state)=>state)
    const navigate=useNavigate();
    useEffect(() => {
      AuthCheck();
    }, [auth])
    
    const AuthCheck=()=>{
        if(auth.id==='') navigate('/')
    }
    
    return <>{children}</>;
}

export default PrivateRoutes;