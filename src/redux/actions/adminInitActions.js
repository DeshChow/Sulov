
import { ADMIN_GET_USERINFO, ADMIN_INIT_DATA } from "../../constants/types"
import Sulov from "../../Sulov"



export const adminInitAction = ()=>dispatch=>
{
   
    return Sulov.get('/admin/init/').then(res=>
        {
            // console.log(res);
           
            return dispatch({
                type : ADMIN_INIT_DATA,
                payload : res.data
            })

        })
        .catch(err=>console.log(err))
}

export const getAllCustomersInfo =  ()=>dispatch=>
{
   
    return Sulov.get('/admin/user/').then(res=>
        {
          
           
            return dispatch({
                type : ADMIN_GET_USERINFO,
                payload : res.data
            })

        })
        .catch(err=>console.log(err))
} 

