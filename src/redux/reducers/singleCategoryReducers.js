
import React from 'react';

import { SINGLE_CATEGORY_LOAD, SINGLE_CLEAR_CATEGORY } from '../../constants/types';

const initialState = {};


const singleCategoryReducers = (state=initialState,action) => {

    
    switch(action.type)
    {
        case SINGLE_CATEGORY_LOAD : return {...action.payload};

        case SINGLE_CLEAR_CATEGORY : return {};

        default : return state;
    }
  
};

export default singleCategoryReducers;