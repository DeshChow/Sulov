import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderHistoryAction } from './../../../redux/actions/orderHistoryAction';
import OrderHistoryCard from './../../../Components/OrderHistoryCard/OrderHistoryCard';
import LoaderComponent from '../../../Components/LoaderComponent/LoaderComponent';

const OrderHistory = () => {


    const dispatch = useDispatch();

    const orderHistory= useSelector(state=>state.orderHistory);

    let allOrderHistory =undefined;


    if(orderHistory!==undefined)
       allOrderHistory = orderHistory.allOrderHistory



    React.useEffect(()=>
    {

        dispatch(orderHistoryAction())

    },[])



    return (

        allOrderHistory===undefined? <LoaderComponent/> : 
        <div>
            {
                allOrderHistory.map((data,idx)=><OrderHistoryCard key={idx}
                data={data}/>
                )
            }
        </div>
    );
};

export default OrderHistory;