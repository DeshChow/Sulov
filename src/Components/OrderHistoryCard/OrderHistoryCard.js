import { CssBaseline, Container, Paper, Typography } from '@material-ui/core';
import React from 'react';
import  Box  from '@material-ui/core/Box';

const OrderHistoryCard = (props) => {


    const {stripePaymentDetails} = props.data

    const {orderProduct,userAddress} = props.data.orderInfo;

    const {firstName,lastName} = userAddress;

    console.log('now ',stripePaymentDetails,orderProduct,userAddress)


    
    return (
        <>
        <CssBaseline/>

        <Container component={Box} p={4}>
         
    

         <Paper component={Box} p={5}>

                <Typography>{firstName} {lastName}</Typography>

         </Paper>

         </Container>
        </>
    );
};

export default OrderHistoryCard;