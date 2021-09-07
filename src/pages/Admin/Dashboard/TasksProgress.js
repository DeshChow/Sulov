import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Typography,
    makeStyles
    
  } from '@material-ui/core';
  import { orange } from '@material-ui/core/colors';
  import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
  
  import React from 'react';
  const useStyles = makeStyles(theme=>({


    root : {

        minHeight : "100px",
        background : "#1A2138"



    },
    title : {

        fontSize : "16px",
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
  
  const TasksProgress = ({taskProgress}) => {

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
                Progress Overview
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
              className = {classes.content}
            >
              <span style={{color: '#00ab55'}}>{taskProgress}</span>
            </Typography>
          </Grid>
          <Grid item xs={4} container justify='flex-end'>

              <Grid item>

              <Avatar
              className={classes.Avatar}
            >
              <InsertChartIcon />
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

                  

              
                <InsertChartIcon xs={{color : "yellow"}}/>



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
    // <Card
    //   sx={{ height: '100%' }}
    
    // >
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
    //           TASKS PROGRESS
    //         </Typography>
    //         <Typography
    //           color="textPrimary"
    //           variant="h3"
    //         >
    //           {taskProgress}
    //         </Typography>
    //       </Grid>
    //       <Grid item>
    //         <Avatar
    //           sx={{
    //             backgroundColor: orange[600],
    //             height: 56,
    //             width: 56
    //           }}
    //         >
    //           <InsertChartIcon />
    //         </Avatar>
    //       </Grid>
    //     </Grid>
    //     <Box sx={{ pt: 3 }}>
    //       <LinearProgress
    //         value={75.5}
    //         variant="determinate"
    //       />
    //     </Box>
    //   </CardContent>
    // </Card>
        };
  
  export default TasksProgress;