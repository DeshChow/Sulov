import React, { useContext,useState } from 'react';

import {Button,Typography}  from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { UserContext } from '../../App';
import StripeContainer from './StripeContainer';


  
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { TotalProductPrice } from './../../utilities/totalProductPrice';
import { clearShoppingCart } from './../../redux/actions/shoppingCartActions';
import SulovAlert from '../../Components/SulovAlert/SulovAlert';
import { initAlert } from '../../constants/types';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "black",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}




export default function PaymentForm({setActiveStep,setOrderId}) {

  

  const [success, setSuccess ] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  


  const orderProduct = useSelector(st=>st.shoppingCart)
  

  const userInfo = useSelector(st=>st.auth._id);

  const dispatch = useDispatch();

  const [alertOpen,setAlertOpen] = useState({...initAlert})

  

  console.log(userInfo);
  
  const [orderInfo,setOrderInfo] = useContext(UserContext);

  const userAddress = orderInfo;


  const handleSubmit = async (e) => {
      e.preventDefault()
      const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement)
      })


  if(!error) {
      try {

        console.log('hamaisi ');
          const {id} = paymentMethod
          const response = await axios.post("http://localhost:5000/order/", {
              amount: TotalProductPrice(orderProduct,0),
              id,

              userInfo,
            
              orderInfo :{
                userAddress,

            

            


               orderProduct 
              }

          })

          console.log(response)

          if(response.data.success) {
              console.log("Successful payment")

              console.log(response.data);
              setSuccess(true)
              setActiveStep(3);

              setOrderId(response.data.orderId);

              dispatch(clearShoppingCart());

              setOrderInfo({});

              setAlertOpen({

                ...initAlert,

                open : true,

                type : "success",

                message : "Successful payment"
              })

              
          }

      } catch (error) {
          console.log("Error", error)
      }
  } else {
      console.log(error.message)
  }

}



  return (
      <>
      {!success ? 
      <>
      <SulovAlert alertOpen={alertOpen} setAlertOpen = {setAlertOpen}/>
      <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
              <div className="FormRow">
                  <CardElement options={CARD_OPTIONS}/>
              </div>
          </fieldset>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button type='submit' style={{color: '#fff', backgroundColor: '#3f51b5', marginTop: '30px'}}>Pay</Button>
          </div>
      </form>

      </>
      :
     <div>
         <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
     </div> 
      }
          
      </>
  )
 
}