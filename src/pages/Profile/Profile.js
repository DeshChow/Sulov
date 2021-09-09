import React,{useEffect} from 'react';
import NavbarInside from '../../Components/NavbarInside/NavbarInside';
import { Container, CssBaseline, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';
import OrderHistoryCard from './../../Components/OrderHistoryCard/OrderHistoryCard';
import { authAction } from './../../redux/actions/authAction';

const Profile = () => {


    const auth = useSelector(state=>state.auth);

    const dispatch = useDispatch()

    const {pic,name,email,orderHistory} = auth===undefined ? {} : auth;


    useEffect(()=>
    {
       dispatch(authAction({
        email : auth.email
    })) 

    },[])

    

    console.log('pic ',pic)


    return (
        <>
        <CssBaseline />
        <NavbarInside/>
        <Container component={Box} p={1} style={{marginTop : "70px"}}>
          <Paper component={Box} >

          <img src='https://wallpapercave.com/wp/wp3537546.jpg'
          
          style={{width : "100%",height : "35vh"}} alt=''></img>

          <div style={{textAlign : "center"}}>

            {pic===null || pic===undefined ?   <img 
          src={"https://png.pngtree.com/png-vector/20190224/ourlarge/pngtree-vector-avatar-icon-png-image_699747.jpg"} style={{marginTop : "-60px",width : "120px",height : "120px",
          textAlign : "center",borderRadius : "50%"}} alt=''/> :
            <img 
          src={pic} style={{marginTop : "-60px",width : "120px",height : "120px",
          textAlign : "center",borderRadius : "50%"}} alt=''/>
            
          }

         

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