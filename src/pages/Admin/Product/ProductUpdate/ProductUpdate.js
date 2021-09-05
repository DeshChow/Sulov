import React,{useEffect} from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { singleProductAction } from './../../../../redux/actions/singleProductAction';

const ProductUpdate = () => {

    const {id} = useParams();

    const dispatch = useDispatch()


    useEffect(()=>
    {

        dispatch(singleProductAction(id))

        return()=>
        {
        //  dispatch(clearSingleP)
        }

    },[id])


    return (
        <div>
            hello update
        </div>
    );
};

export default ProductUpdate;