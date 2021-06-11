
import React from 'react';

import { SINGLE_CLEAR_PRODUCT, SINGLE_PRODUCT_LOAD } from '../../constants/types';

const initialState = {};


const singleProductReducers = (state=initialState,action) => {

    
    switch(action.type)
    {
        case SINGLE_PRODUCT_LOAD : return {...action.payload};

        case SINGLE_CLEAR_PRODUCT : return {};

        default : return state;
    }
  
};

export default singleProductReducers;