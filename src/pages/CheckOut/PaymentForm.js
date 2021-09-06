import React, { useContext,useState } from 'react';

import Typography from '@material-ui/core/Typography';
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
      <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
              <div className="FormRow">
                  <CardElement options={CARD_OPTIONS}/>
              </div>
          </fieldset>
          <button>Pay</button>
      </form>
      :
     <div>
         <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
     </div> 
      }
          
      </>
  )
 
}