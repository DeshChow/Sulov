import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function SulovAlert({alertOpen,setAlertOpen}) {
 

    const {open,verticalPos,horizontalPos,message,type} = alertOpen;

   
  const classes = useStyles();
  
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

  



    setAlertOpen({
        ...alertOpen,

        open:false

    })
  };

  const   vertical=verticalPos, horizontal= horizontalPos ;

  return (
    <div className={classes.root}>
     
      <Snackbar  open={open} autoHideDuration={2000} onClose={handleClose}
       anchorOrigin={{ vertical, horizontal }}

     
key={vertical + horizontal}
      
      >
        <Alert  onClose={handleClose} severity={type}>
       {message}
        </Alert>
      </Snackbar>
    
    </div>
  );
}