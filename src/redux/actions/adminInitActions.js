
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
//    console.log('hamaisi getAllCustomersInfo')
    return Sulov.get('/user/info').then(res=>
        {

            console.log('customer get',res);
          
           
            return dispatch({
                type : ADMIN_GET_USERINFO,
                payload : res.data
            })

        })
        .catch(err=>console.log(err))
} 

