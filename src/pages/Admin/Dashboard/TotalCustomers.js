  
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,makeStyles

  } from '@material-ui/core';
 
  import { green } from '@material-ui/core/colors';
  import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
  import PeopleIcon from '@material-ui/icons/PeopleOutlined';

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

  
  const TotalCustomers = ({userCount}) => {

    const classes = useStyles()

    return <Card
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
                TOTAL CUSTOMERS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
              className = {classes.content}
            >
              <span style={{color: '#00ab55'}}>{userCount}</span>
            </Typography>
          </Grid>
          <Grid item xs={4} container justify='flex-end'>

              <Grid item>

              <Avatar
              className={classes.Avatar}
            >
               <PeopleIcon />
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

                <ArrowUpwardIcon sx={{ color: green[900] }} />



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

    // <Card >
    //   <CardContent>
    //     <Grid
    //       container
    //       spacing={3}
    //       sx={{ justifyContent: 'space-between' }}
    //     >
    //       <Grid item>
    //         <Typography
    //           color="textSecondary"
    //           gutterBottom
    //           variant="h6"
    //         >
    //           TOTAL CUSTOMERS
    //         </Typography>
    //         <Typography
    //           color="textPrimary"
    //           variant="h3"
    //         >
    //          {userCount}
    //         </Typography>
    //       </Grid>
    //       <Grid item>
    //         <Avatar
    //           sx={{
    //             backgroundColor: green[600],
    //             height: 56,
    //             width: 56
    //           }}
    //         >
    //           <PeopleIcon />
    //         </Avatar>
    //       </Grid>
    //     </Grid>
    //     <Box
    //       sx={{
    //         alignItems: 'center',
    //         display: 'flex',
    //         pt: 2
    //       }}
    //     >
    //       <ArrowUpwardIcon sx={{ color: green[900] }} />
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           color: green[900],
    //           mr: 1
    //         }}
    //       >
    //         16%
    //       </Typography>
    //       <Typography
    //         color="textSecondary"
    //         variant="caption"
    //       >
    //         Since last month
    //       </Typography>
    //     </Box>
    //   </CardContent>
    // </Card>
        };
  
  export default TotalCustomers;