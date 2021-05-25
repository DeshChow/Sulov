import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { picUrl } from '../../constants/picUrl';
import { singleProductAction } from '../../redux/actions/singleProductAction';

const SingleProduct = () => {

     const dispatch = useDispatch();

     const {id} = useParams();

     const singleProduct = useSelector(state=>state.singleProduct);

     const {pic} = singleProduct;

     console.log('pic',pic);

     

    useEffect(()=>
    {

        dispatch(singleProductAction(id));



    },[])

    

    

    
    return (
        <div>
            <img src={picUrl(pic)}></img>
        </div>
    );
};

export default SingleProduct;