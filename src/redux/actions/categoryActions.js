
import { CATEGORY_LOAD } from "../../constants/types"
import Sulov from "../../Sulov"



export const categoryActions = ()=>dispatch=>
{
   
    return Sulov.get('/category/').then(res=>
        {
           
            return dispatch({
                type : CATEGORY_LOAD,
                payload : {...res.data.result}
            })

        })
        .catch(err=>console.log(err))
}

