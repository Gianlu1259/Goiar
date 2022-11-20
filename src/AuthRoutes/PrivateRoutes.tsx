import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useCustomSelector } from '../hooks/redux';

export interface IPrivateRoutesProps {
    children: React.ReactNode
}
 
const PrivateRoutes: React.FunctionComponent<IPrivateRoutesProps> = ({children}) => {
    const {auth}=useCustomSelector((state)=>state)
    const navigate=useNavigate();
    useEffect(() => {
      AuthCheck();
    }, [auth])
    
    const AuthCheck=()=>{
        if(auth.id===''){
            console.log('inautorizado')
            navigate('/')
        }
    }
    
    return <>{children}</>;
}

export default PrivateRoutes;