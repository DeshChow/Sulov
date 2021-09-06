import React from 'react';
 
import { AUTH_INFO_LOAD} from '../../constants/types';
import { SIGN_OUT } from './../../constants/types';
 
const initialState = {
    isSignedIn : false
};
 
 
const authReducers = (state=initialState,action) => {

    console.log('authreducers ',action);
 
 
    switch(action.type)
    {
        case AUTH_INFO_LOAD : return {...action.payload,isSignedIn : true};

        case SIGN_OUT: 
          return {isSignedIn : false}
 
        default : return state;
    }
 
};
 
export default authReducers;