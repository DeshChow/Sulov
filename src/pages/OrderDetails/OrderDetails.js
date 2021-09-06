import { Button, Grid, makeStyles, Typography, Container, CssBaseline, Toolbar, Icon } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarInside from '../../Components/NavbarInside/NavbarInside';
import { isLoading } from '../../constants/isLoading';
import { picUrl } from '../../constants/picUrl';
import { deleteShoppingActions } from '../../redux/actions/shoppingCartActions';
import './OrderDetails.css';
import CancelIcon from '@material-ui/icons/Cancel';
import { useHistory } from 'react-router-dom';
import { userOrderUrl } from '../../urls';

/*import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';*/

const TAX_RATE = 0.07;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#EDEDED',
    height: '100vh'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // table: {
  //   minWidth: 280,
  // },
  // tableRow: {
  //   background: 'orangered'
  // },
  // desc:{
  //   background: 'orangered'
  // }
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(product, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { product, qty, unit, price };
// }

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

// const rows = [
//   createRow('Paperclips (Box)', 100, 1.15),
//   createRow('Paper (Case)', 10, 45.99),
//   createRow('Waste Basket', 2, 17.99),
// ];

// let rows = []

const OrderDetails = () => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();




  const allProduct = useSelector(st => st.shoppingCart);

  const deleteProduct = (id) => {
    console.log(id);


    return dispatch(deleteShoppingActions(id));


  }

  const routeChange=()=>history.push(userOrderUrl());


  return (
    /* <React.Fragment>  
     <Container maxWidth="xl">

     <Grid  container spacing={2} justify='center' wrap='wrap' >

       <Grid item xs={9}>
     <TableContainer component={Paper}>
   <TableContainer className={classes.table} aria-label="spanning table">
     <TableHead>
       <TableRow className={classes.tableRow}>
         <TableCell>Product</TableCell>
        <TableCell align="right">Qty.</TableCell>
         <TableCell align="right">Unit</TableCell>
         <TableCell align="right">Sum</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
     
    
       {
     allProduct.map(pd=>
           rows.push(createRow(pd.title, pd.quantity, pd.price)))
     }
  
     
       {          
       rows.map((row) => (
         <TableRow key={row.product}>
           <TableCell>{row.product}</TableCell>
           <TableCell align="right">{row.qty}</TableCell>
           <TableCell align="right">{row.unit}</TableCell>
           <TableCell align="right">{ccyFormat(row.price)}</TableCell>
         </TableRow>
       ))}
       

       <TableRow>
         <TableCell rowSpan={3} />
         <TableCell colSpan={2}>Subtotal</TableCell>
         <TableCell align="right">{ccyFormat(subtotal(rows))}</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>Tax</TableCell>
         <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
         <TableCell align="right">{ccyFormat(TAX_RATE * subtotal(rows))}</TableCell>
       </TableRow>
       <TableRow>
         <TableCell colSpan={2}>Total</TableCell>
         <TableCell align="right">{ccyFormat((TAX_RATE * subtotal(rows))+subtotal(rows))}</TableCell>
       </TableRow>
     </TableBody>
   </Table>
 </TableContainer>

 </Grid>

 <Grid item xs={3}>

   <Typography className={classes.desc}>
         Order Summary
   </Typography>
 </Grid>
 </Grid>
     </Container>
     </React.Fragment>
*/

 

    <div className={classes.root}>
      <CssBaseline />
      <NavbarInside />
      <main className={classes.content} >
        <Toolbar />
        <Container maxWidth='xl'>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={12} md={9} lg={9} >
              <div className="cart-small-container cart-page">
                <table style={{background: 'white'}}>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                  {
                    allProduct.map(pd =>
                      <tr>
                        <td>
                          <div className="cart-info">
                            <img src={picUrl(pd.pic)}></img>
                            <div>
                              <p>{pd.title}</p>
                              <small>Price: {ccyFormat(pd.price)}</small>
                              <br></br>
                              {/* <a href="">remove</a>  */}
                            </div>

                            <CancelIcon onClick={() => deleteProduct(pd.id)} className="icon-del"></CancelIcon>

                          </div>

                        </td>
                        <td><input type="number" value={pd.quantity}></input></td>
                        <td>{ccyFormat(pd.price)}</td>
                      </tr>
                    )}
                </table>
                <div className="total-price">

                  <table style={{background: 'white'}}> 
                    <tr>
                      <td>Subtotal</td>
                      <td>{Math.ceil(subtotal(allProduct.map(pd => pd))).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Tax(7%)</td>
                      <td>{Math.ceil(TAX_RATE * subtotal(allProduct.map(pd => pd))).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>{Math.ceil((TAX_RATE * subtotal(allProduct.map(pd => pd))) + subtotal(allProduct.map(pd => pd))).toFixed(2)}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </Grid>
           
            <Grid item xs={12} sm={12} md={3} lg={3} >
              {/* <div className="order">
                            <p>Order Summary</p>
                          </div>
                          <div className="order-details">
                              <table>
                                 <tr>
                                    Hi
                                 </tr>
                              </table>
                          </div> */}
              <div className="order-tab">
                <table className="order-tab-full">
                  <tr className="order-para">
                    <th className="order-para-sp">Order Summary</th>
                  </tr>
                  <tr style={{ textAlign: 'center', background: 'white' }}>
                    <br></br>
                    <h4>You Have Selected</h4>
                  </tr>
                  {
                    allProduct.map(pd =>

                      <tr className="order-row">
                        <td className="order-para-details">
                          <span style={{ color: "red" }}>{pd.quantity}</span> items of <span style={{ color: "red" }}>{pd.title}</span>
                          <br></br>
                          <br></br>
                          <span style={{ color: "red" }}>Price: </span> <span>
            {   pd.price} </span>

                        </td>

                      </tr>


                    )
                  }

                  <tr style={{ textAlign: 'center', background: 'white' }}>
                    <br></br>
                    <h4><span style={{ color: "red" }}>Total Price:</span>{Math.ceil((TAX_RATE * subtotal(allProduct.map(pd => pd))) + subtotal(allProduct.map(pd => pd))).toFixed(2)} </h4>
                    <small style={{ color: 'gray' }}>*all terms and vats included</small>
                  </tr>
                </table>

              </div>



              <Grid container justify='center' alignItems='center' >

                <Button onClick = {routeChange} variant='contained' style={{
                  background: '#00ab55', color: 'white'
                }}>


                  Confirm Order
                </Button>


              </Grid>



            </Grid>

            






          </Grid>


        </Container>
      </main>
    </div>
  );
};

export default OrderDetails;