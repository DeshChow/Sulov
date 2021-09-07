
import { sulovBaseUrl } from "../../sulovBaseUrl";
const axios = require("axios");

export const contactAction = (data,callBack) => async (dispatch) => {



  try {

    const url = `${sulovBaseUrl}/user/contact`;

    const res = await axios.post(url, { ...data });

    console.log(res);


    callBack()

    return dispatch({
        type:"asddsad"
      
      });



  } catch (err) {

    console.log('fahim ');
   alert(err)
  }
};
