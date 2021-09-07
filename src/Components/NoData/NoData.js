
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import noProduct from '../../images/noProduct.png'
import { SMALL } from '../../constants/types';

const useStyles = makeStyles(theme =>({

    root : {


        
        textAlign : 'center',
     

    },


    imgStyle : {


        height : theme.spacing(8),
        width : theme.spacing(8),

        [theme.breakpoints.up('sm')] : {

            height : theme.spacing(20),
            width : theme.spacing(20),
    


        }


    }




}))

const NoData = ({type}) => {

    const classes = useStyles();

    


    return (

        type===SMALL? <div  style={{ display: 'flex' ,justifyContent:'center',
        alignItems: "center", flexDirection: 'column', height: '30vh' }}>
        <Grid container direction='column' justify='center' alignItems='center'  
        className = {classes.root} >
            
            <Grid item>

            <img className={classes.imgStyle} src={noProduct} alt=''></img>


            </Grid>
           

                <Grid item>

                <h5>No Data Available</h5>

                These is no data to show you to right now



                </Grid>
   


        </Grid>
        </div> : 
        <div  style={{ display: 'flex' ,justifyContent:'center',alignItems: "center",
         flexDirection: 'column', height: '70vh' }}>
        <Grid container direction='column' justify='center' alignItems='center'  
        className = {classes.root} >
            
            <Grid item>

            <img className={classes.imgStyle} src={noProduct} alt=''></img>


            </Grid>
           

                <Grid item>

                <h5>No Data Available</h5>

                These is no data to show you to right now



                </Grid>
   


        </Grid>
        </div>
    );
};

export default NoData;