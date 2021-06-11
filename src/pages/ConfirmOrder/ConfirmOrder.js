import { CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react';
import NavbarInside from '../../Components/NavbarInside/NavbarInside';


const useStyles = makeStyles(theme=>({


    root: {
        display: 'flex',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },




}))

const ConfirmOrder = () => {

    const classes = useStyles();


    return (
     
    <div className={classes.root}>
    <CssBaseline />
    <NavbarInside />
    <main className={classes.content} >

      <div container style={{marginTop : "50px"}}>

d
      </div>

        </main>

        </div>
    );
};

export default ConfirmOrder;