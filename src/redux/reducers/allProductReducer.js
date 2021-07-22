
import React from 'react';

import { ALL_PRODUCT_LOAD} from '../../constants/types';

const initialState = [];


const categoryReducers = (state=initialState,action) => {

    
    switch(action.type)
    {
        case ALL_PRODUCT_LOAD: return [...action.payload.data];

        default : return state;
    }
  
};

export default categoryReducers;