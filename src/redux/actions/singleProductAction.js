import React from 'react';
import { SINGLE_CLEAR_PRODUCT, SINGLE_PRODUCT_LOAD } from '../../constants/types';
import Sulov from '../../Sulov';

export const singleProductAction = (id) => dispatch=>{
    
    
   
    return Sulov.get(`/product/${id}`).then(res=>
        {
        
           
            return dispatch({
                type : SINGLE_PRODUCT_LOAD,
                payload : {...res.data.result}
            })

        })
        .catch(err=>console.log(err))
};

export const  singleClearProductAction = ()=>{

    return {
        type : SINGLE_CLEAR_PRODUCT
    }
}

