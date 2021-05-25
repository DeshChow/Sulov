
import React from 'react';

import { SINGLE_CATEGORY_LOAD } from '../../constants/types';

const initialState = {};


const singleCategoryReducers = (state=initialState,action) => {

    
    switch(action.type)
    {
        case SINGLE_CATEGORY_LOAD : return {...action.payload};

        default : return state;
    }
  
};

export default singleCategoryReducers;