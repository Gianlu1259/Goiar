import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export interface IPrivateRoutesProps {
    children: React.ReactNode
}
 
const PrivateRoutes: React.FunctionComponent<IPrivateRoutesProps> = (props) => {
    console.log(props)
    const {children} = props;
    const auth=getAuth();
    const navigate=useNavigate();
    console.log('holaaaaaaaaaaaaaaaaaa')
    useEffect(() => {
      AuthCheck();
    }, [auth])
    
    const AuthCheck=onAuthStateChanged(auth,(user)=>{
        if(user){
            console.log(user);
        }else{
            console.log('inautorizado')
            navigate('/')
        }
    })
    
    return <>{children}</>;
}

export default PrivateRoutes;