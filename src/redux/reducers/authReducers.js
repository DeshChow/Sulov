import React from 'react';
 
import { AUTH_INFO_LOAD} from '../../constants/types';
 
const initialState = {};
 
 
const authReducers = (state=initialState,action) => {

    console.log('authreducers ',action);
 
 
    switch(action.type)
    {
        case AUTH_INFO_LOAD : return {...action.payload};
 
        default : return state;
    }
 
};
 
export default authReducers;