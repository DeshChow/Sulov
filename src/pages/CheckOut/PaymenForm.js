import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { UserContext } from '../../App';

export default function PaymentForm() {

    const [orderInfo,setOrderInfo] = useContext(UserContext);


    const handleBlur = (e)=>{

        const newOrderInfo = orderInfo;

        newOrderInfo[e.target.id] = e.target.value;

        setOrderInfo(newOrderInfo);

        console.log('order ',orderInfo);



   }

   
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField   onChange = {handleBlur} required  id="cardName" label="Name on card"
           fullWidth autoComplete="cc-name"

           value={orderInfo["cardName"]}

        
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"

            fullWidth
            autoComplete="cc-number"
            onChange = {handleBlur}
            value={orderInfo["cardNumber"]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp"
            onChange = {handleBlur}
            value={orderInfo["expDate"]}
           />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            onChange = {handleBlur}
            value={orderInfo["cvv"]}
            
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
            onChange = {handleBlur}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}