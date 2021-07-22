
import { ALL_PRODUCT_LOAD } from "../../constants/types"
import Sulov from "../../Sulov"



export const allProductActions = ()=>dispatch=>
{

    console.log('hmaiaisi all');
   
    return Sulov.get('/product/').then(res=>
        {

            // console.log('hello red',res.data.products);
           
            return dispatch({
                type : ALL_PRODUCT_LOAD,
                payload : {data : res.data.products}
            })

        })
        .catch(err=>console.log(err))
}

