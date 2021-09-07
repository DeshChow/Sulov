
import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
  
  
  import React from 'react';
import Budget from './Budget';

  import TotalCustomers from './TotalCustomers'
  import TasksProgress from './TasksProgress'
  import TotalProfit from './TotalProfit'
  import Sales from "./Sales"
import LatestProducts from './LatestProducts';
import LatestOrders from './LatestOrders';
import TrafficByDevice from './TrafficByDevice'
import { useSelector } from 'react-redux';
import LoaderComponent from '../../../Components/LoaderComponent/LoaderComponent';
  
  const Dashboard = () =>{

    const adminInitData = useSelector(st=>st.adminInitData);

    const {budget,userCount,taskProgress,latestProduct,latestOrder} = adminInitData;
     
     return  <React.Fragment>

       {latestProduct===undefined ? <LoaderComponent/> : 
        
        <div >
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <Budget budget={budget}/>
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <TotalCustomers userCount = {userCount} />
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <TasksProgress taskProgress = {taskProgress} />
              </Grid>
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <TotalProfit sx={{ height: '100%' }} profit={20} />
              </Grid>
              {/* <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
              >
                <Sales />
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
              >
                <TrafficByDevice sx={{ height: '100%' }} />
              </Grid> */}
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
              >
                <LatestProducts latestProduct={latestProduct} sx={{ height: '100%' }}  />
              </Grid>
              <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
              >
                <LatestOrders latestOrder={latestOrder} />
              </Grid>
            </Grid>
          </Container>
        </Box>
        </div>}
      </React.Fragment>
  }
    
    export default Dashboard;