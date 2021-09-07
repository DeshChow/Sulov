import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    makeStyles,
    Typography
  } from '@material-ui/core';
  import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
  import MoneyIcon from '@material-ui/icons/Money';
  import { red } from '@material-ui/core/colors';
  import React from 'react';

  const useStyles = makeStyles(theme=>({


    root : {

        minHeight : "100px",
        background : "#1A2138"



    },
    title : {

        fontSize : "14px",
        color : "white"
    },
    content : {

        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '1.167',
        letterSpacing: '-0.06px',
        color: 'white'
    
    
    
    },
    Avatar : {
        background : "red",
      
       
    }








  }))
  const Budget = ({budget}) => {

    console.log(budget);

    const classes = useStyles();


    return ( <Card
        className={classes.root}
    >
      <CardContent>
        <Grid
          container
          spacing={4}
          style={{ justifyContent: 'space-between' }}
        >
          <Grid item xs={8}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
              className ={classes.title}
            >
              BUDGET
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
              className = {classes.content}
            >
              <span style={{color: '#00ab55'}}>{budget}</span>
            </Typography>
          </Grid>
          <Grid item xs={4} container justify='flex-end'>

              <Grid item>

              <Avatar
              className={classes.Avatar}
            >
              <MoneyIcon />
            </Avatar>


              </Grid>
         
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
            <Grid container justify='flex-start' alignItems = "center" style={{marginTop : "15px"}} spacing={1}>

                <Grid item>

                <ArrowDownwardIcon style={{color : "red"}} />



                </Grid>
                <Grid item>

                <Typography
            style={{color : "red"}}
            variant="body2"
          >
            12%
          </Typography>


                    
</Grid>
<Grid item>
<Typography
           style={{color : "grey"}}
            variant="caption"

          >
            Since last month
          </Typography>


                    
</Grid>



            </Grid>
        
       
        
        </Box>
      </CardContent>
    </Card>
  )};
  
  export default Budget;