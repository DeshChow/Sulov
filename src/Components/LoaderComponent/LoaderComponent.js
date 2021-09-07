import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { SMALL } from '../../constants/types';

const LoaderComponent = ({type}) => {

    if(type===SMALL)
    return   <div style={{display : "flex",flexDirection : "column",alignItems : "center",justifyContent : "center",

    minHeight : "30vh"
    
    }}>


   <Loader type="Oval" color="#149DF8" height={40} width={40} />


   </div>

   else 
   return   <div style={{display : "flex",flexDirection : "column",alignItems : "center",justifyContent : "center",
    
   minHeight : "70vh"}}>


  <Loader type="Oval" color="#149DF8" height={50} width={50} />


  </div>

             
      
    
};

export default LoaderComponent;



