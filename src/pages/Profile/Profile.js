import React from 'react';
import NavbarInside from '../../Components/NavbarInside/NavbarInside';
import { Container, CssBaseline, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import OrderHistoryCard from './../../Components/OrderHistoryCard/OrderHistoryCard';

const Profile = () => {


    const auth = useSelector(state=>state.auth);

    const {pic,name,email,orderHistory} = auth===undefined ? {} : auth;

    

    console.log('pic ',pic)


    return (
        <>
        <CssBaseline />
        <NavbarInside/>
        <Container component={Box} p={1} style={{marginTop : "70px"}}>
          <Paper component={Box} >

          <img src='https://images.squarespace-cdn.com/content/v1/5cb7bce8aadd3403319e4502/1592927445885-DJPW9ANXRN9ZVNDP14RF/resume-writing-linkedin-optimization.jpg?format=2500w'
          
          style={{width : "100%",height : "35vh"}} alt=''></img>

          <div style={{textAlign : "center"}}>

          <img 
          src={pic} style={{marginTop : "-60px",width : "120px",height : "120px",
          textAlign : "center",borderRadius : "50%"}} alt=''/>

<h3 style={{	fontSize : "20px"}}><strong>{name}</strong></h3>

<p>{email}</p>
{/* 
<div style={{display : "flex",justifyContent : "flex-start", paddingBottom : "10px"}}>

            */}

{orderHistory===undefined? <div>You Have No Order </div> : 
        <div>
            {
                orderHistory.map((data,idx)=><OrderHistoryCard key={idx}
                data={data}/>
                )
            }
        </div>}
        
           
              </div>
          


          {/* </div> */}


           
          </Paper>
        </Container>
      </>
    );
};

export default Profile;