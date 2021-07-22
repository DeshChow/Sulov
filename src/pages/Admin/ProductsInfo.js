
import { Button, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AdminProductCard from '../../Components/AllCard/AdminProductCard/AdminProductCard';
import { productUrl } from '../../urls';
import { allProductActions } from './../../redux/actions/allProductsActions';

const ProductsInfo = () => {

    const history = useHistory();

    const dispatch = useDispatch()

    const allProduct = useSelector(st=>st.allProduct);

    console.log(allProduct);


    const handleClick = ()=>
    {
        history.push('/AddProduct')
    }

    useEffect(()=>
    {

        dispatch(allProductActions())


    },[])


    return (

        <div>

     

            <Button onClick={handleClick} style={{background : "white"}}>


                ADD PRODUCT
            </Button>



<div style={{background : "red",height : "100px",width : "200px",color : "white"}}>
            dkfdsjk
        </div>

  <Grid container>



        {

allProduct.map(pd=>

  <Grid item xs={12} sm={6} md={6} lg={4} >

<AdminProductCard pd={pd}/>
  </Grid>
        )
        
        

        }

</Grid>

        </div>
       
    );
};

export default ProductsInfo;