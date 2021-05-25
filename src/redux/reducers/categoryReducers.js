
import React from 'react';

import { CATEGORY_LOAD} from '../../constants/types';

const initialState = {};


const categoryReducers = (state=initialState,action) => {

    
    switch(action.type)
    {
        case CATEGORY_LOAD : return {...action.payload};

        default : return state;
    }
  
};

export default categoryReducers;