
import { sulovBaseUrl } from "../../sulovBaseUrl";
const axios = require("axios");

export const contactAction = (data,setSuccess) => async (dispatch) => {



  try {

    const url = `${sulovBaseUrl}/user/contact`;

    const res = await axios.post(url, { ...data });

    console.log(res);


    setSuccess(true);

    return dispatch({
        type:"asddsad"
      
      });



  } catch (err) {

    console.log('fahim ');
   alert(err)
  }
};
