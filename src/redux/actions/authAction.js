import React from "react";
import { AUTH_INFO_LOAD } from "../../constants/types";
import Sulov from "../../Sulov";
import { sulovBaseUrl } from "../../sulovBaseUrl";
import { SIGN_OUT } from './../../constants/types';
const axios = require("axios");

export const authAction = (data) => async (dispatch) => {



  try {

    const url = `${sulovBaseUrl}/user/signupin`;

    const res = await axios.post(url, { ...data });


    return dispatch({
      type: AUTH_INFO_LOAD,
      payload: { ...res.data.data ,isSignedIn : true},
    });



  } catch (err) {

    console.log('fahim ');
   alert(err)
  }
};


export const signOutAction = ()=>
{
     return {

      type : SIGN_OUT
     }
}