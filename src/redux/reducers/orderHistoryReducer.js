import { ORDER_HISTORY_LOAD } from "../../constants/types";

const orderHistoryReducer = (state={},action) => {

    switch(action.type)
    {
        case ORDER_HISTORY_LOAD:
            return action.payload;

        default: return state;
    }
   
};

export default orderHistoryReducer;