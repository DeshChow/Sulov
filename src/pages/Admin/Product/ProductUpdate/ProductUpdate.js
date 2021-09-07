import React,{useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { singleClearProductAction, singleProductAction } from './../../../../redux/actions/singleProductAction';
import  TextField  from '@material-ui/core/TextField';
import { CssBaseline, Container, Paper, Box , Button,makeStyles, Grid, Typography } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from './../../../../Sulov';
import LoaderComponent from '../../../../Components/LoaderComponent/LoaderComponent';
import { SMALL } from '../../../../constants/types';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const ProductUpdate = () => {

    const classes = useStyles()

    const {id} = useParams();

    const dispatch = useDispatch()

    const singleProduct = useSelector(state=>state.singleProduct);

    const [status,setStatus]= useState("active");

    const [data,setData] = useState({});

    const history  = useHistory();

    const handleSubmit=async()=>
    {

        data.status = status;

        if(data.price!==undefined)
        data.price = Number(data.price);


        if(data.itemCount!==undefined)
         data.itemCount=Number(data.itemCount);

        console.log(data);

        try{

            const res = await axios.put(`http://localhost:5000/product/${id}`, { ...data });

            history.push('/sulov/admin/products')

            console.log(res);


        }
        catch(err)
        {

        }

        



    }


    const handleChange=(e)=>
    {
      

        const newData = {...data};

        newData[e.target.id] = e.target.value;

        setData(newData);
    }

    console.log(data);


    useEffect(()=>
    {

        dispatch(singleProductAction(id))

        if(singleProduct!==undefined)
        {
            if(singleProduct.status==='active' || singleProduct.status==='inactive')
                setStatus(singleProduct.status)
        }

        

        return()=>
        {
         dispatch(singleClearProductAction());
        }

    },[id])

   


    return (
        <>
            
<CssBaseline />
        <Container component={Box} p={4}>
         
    

          <Paper component={Box} p={5}>

              <Typography align='center' style={{fontSize : "20px",margin : "10px 0px"}}>Product Update</Typography>

            {Object.keys(singleProduct).length===0?<LoaderComponent type={SMALL}/> : <>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            type="text"
            required
            autoFocus={true}

            onChange={handleChange}

            defaultValue={singleProduct.title}
         
            InputLabelProps={{ shrink: true }}
          />



<TextField
            id="price"
            label="Price"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            required
            autoFocus={true}
            onChange={handleChange}

            defaultValue={singleProduct.price}
         
            InputLabelProps={{ shrink: true }}
          />


<TextField
            id="itemCount"
            label="Item Count"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            required
            autoFocus={true}
            onChange={handleChange}
            defaultValue={singleProduct.itemCount}
         
            InputLabelProps={{ shrink: true }}
          />

<FormControl component="fieldset">
      <FormLabel component="legend">Status</FormLabel>
      <RadioGroup aria-label="status" name="status" value={status}>
        <FormControlLabel value="active" control={<Radio onClick={()=>setStatus("active")} />} label="Active" />
        <FormControlLabel value="inactive" control={<Radio onClick={()=>setStatus("inactive")} />} label="In Active" />
   
      </RadioGroup>
    </FormControl>


    <Grid container justify='center' style={{textAlign : "center"}}>


        <Grid item xs={12}>


            
<Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={handleSubmit}
        startIcon={<SaveIcon />}
      >
        Submit
      </Button>


        </Grid>



    </Grid>


      </>


            }

         

          </Paper>
        </Container>
        </>
    );
};

export default ProductUpdate;