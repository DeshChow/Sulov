import { USER_CONTACT } from "./../../constants/types";

const userContactReducer = ( state = {data: undefined},action) => {
    
    switch (action.type) {

    case USER_CONTACT:

      const newState = state;

      newState.data = action.payload;

      return newState;

    default:
      return state;
  }
};

export default userContactReducer;
