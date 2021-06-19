
import React from 'react';

import { ADMIN_GET_USERINFO, ADMIN_INIT_DATA} from '../../constants/types';

const initialState = {};


const adminInitReducer = (state=initialState,action) => {

    // console.log(action.payload);

    
    switch(action.type)
    {
        case ADMIN_INIT_DATA : return {...state,...action.payload};

        case ADMIN_GET_USERINFO : return {...state,...action.payload};

        default : return state;
    }
  
};

export default adminInitReducer;