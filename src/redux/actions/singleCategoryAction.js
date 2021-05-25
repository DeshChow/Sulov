import React from 'react';
import { SINGLE_CATEGORY_LOAD } from '../../constants/types';
import Sulov from '../../Sulov';

export const singleCategoryAction = (id) => dispatch=>{
    
    
    return Sulov.get(`/category/${id}`).then(res=>
        {
            
           
            return dispatch({
                type : SINGLE_CATEGORY_LOAD,
                payload : {...res.data.result}
            })

        })
        .catch(err=>console.log(err))
};

