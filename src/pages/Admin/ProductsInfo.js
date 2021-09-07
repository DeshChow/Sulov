import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AdminProductCard from "../../Components/AllCard/AdminProductCard/AdminProductCard";
import { productUrl } from "../../urls";
import { allProductActions } from "./../../redux/actions/allProductsActions";
import AddIcon from '@material-ui/icons/Add';
const ProductsInfo = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const allProduct = useSelector((st) => st.allProduct);

  const [state,setState] = useState(false);

  console.log(allProduct);

  const handleClick = () => {
  
      history.push(`/sulov/admin/addProduct`);
  
  };

  useEffect(() => {
    dispatch(allProductActions());

  }, [state]);

  return (
    <div>
   

<Grid
          container
          justifyContent="flex-end"
          style={{ textAlign: "right" ,
        
        padding : "10px 40px"}}
         
        >
          <Grid item xs={12}>
            <Button onClick={handleClick} style={{ background: "#1A2138",color: 'white' }}
              startIcon={<AddIcon />}>
              ADD PRODUCT
            </Button>
          </Grid>
        </Grid>

      <Grid container xs={12}>
       

        {allProduct.map((pd) => (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <AdminProductCard pd={pd} setState={setState} state={state} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsInfo;
