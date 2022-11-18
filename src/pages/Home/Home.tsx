import React from 'react'
import {useSelector} from 'react-redux'
import { useCustomDispatch, useCustomSelector } from '../../hooks/redux'
import { setAccesToke } from '../../redux/slices/auth'



const Home: React.FC = (props) => {
    const {auth}=useCustomSelector((state)=>state)
    const dispatch=useCustomDispatch();
    
    const handleLogin=():void=>{
        if(auth?.token?.length>0){
            dispatch(setAccesToke(''))
        }else{
            dispatch(setAccesToke('zzzzzzzzzaaaaaaaaassasa'))
        }
        
        
        console.log(auth)
    }
  return (
    <div>
      <button onClick={handleLogin}>Home</button>
    </div>
  )
}

export default Home