
import Sulov from '../../Sulov';

export const useContactActions = () => dispatch=>{
    
    
   
    return Sulov.get(`user/contact`).then(res=>
        {

            console.log(res);
        
           
            return dispatch({
               
                payload : {...res.data.result}
            })

        })
        .catch(err=>console.log(err))
};

