import Sulov from "../../Sulov";
import { USER_CONTACT } from './../../constants/types';

export const userContactActions = () => (dispatch) => {


  return Sulov.get(`user/contact`)
    .then((res) => {
      console.log('okkk ',res);

      return dispatch({
        payload: res.data.contacts,
        type : USER_CONTACT
      });
    })
    .catch((err) => console.log(err));
};
