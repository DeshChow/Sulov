import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51JDrYEKTfmuDXMYnphIAu6XcFvNbiwQOuZ4XuPqDAIYDdPCFOM0GMBPcnOhI8pRA1Um0ateSO3gEndfjzUstf8AJ0034OeVUNc";
const stripeTestPromise = loadStripe(PUBLIC_KEY);


const StripeContainer = ({setActiveStep,setOrderId}) => {

    
    return (
       <Elements stripe={stripeTestPromise}>

           <PaymentForm setActiveStep={setActiveStep} setOrderId = {setOrderId}></PaymentForm>

       </Elements>
    );
};

export default StripeContainer;