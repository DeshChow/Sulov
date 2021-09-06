
import {  ORDER_HISTORY_LOAD } from "../../constants/types"
import Sulov from "../../Sulov"



export const orderHistoryAction = ()=>dispatch=>
{
   
    return Sulov.get('/order/').then(res=>
        {

            console.log('ok', res);
           
            return dispatch({
                type : ORDER_HISTORY_LOAD,
                payload : {
                    allOrderHistory : res.data.allOrderHistory
                }
            })

        })
        .catch(err=>console.log(err))
}

