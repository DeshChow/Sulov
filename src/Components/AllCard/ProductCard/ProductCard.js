import React from 'react';
import { useHistory } from 'react-router';
import { productUrl } from '../../../urls';

const ProductCard = (props) => {

    const history = useHistory();


    const {data} = props;

    console.log(data);

    const {pic,title,_id} = data;


    const picurl = `http://localhost:5000/${pic}`

    const routeChange=(product,id)=>
    {
        console.log(product);

      return history.push(productUrl(product,id));


    }


    return (
        <div>
            <img onClick={()=>routeChange(title,_id)}  src={picurl}></img>
        </div>
    );
};

export default ProductCard;