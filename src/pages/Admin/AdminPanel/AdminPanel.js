import { Paper, Grid, Typography } from '@material-ui/core';
import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import { Link } from 'react-router-dom';
import './AdminPanel.css'
import { Col } from 'react-bootstrap';

const AdminPanel = () => {
    return (

        <Grid container justifyContent='space-between' style={{textAlign : "center"}}>

            <Grid item xs={6} style={{textAlign : "center"}}>


            <Paper style={{width : "50%",margin : "auto"}}>
         <img style={{width : "100%",height : "420px",
        margin : "auto"}} src='https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/241401817_3029982997225355_8882234611201017473_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHZg-iOQfpFDXShKx-01Qq8Y0vmKs0MhMZjS-YqzQyExgauCGXB98-h3iJvrDw00jg84xPGSTO0xcyuqgX8sMV5&_nc_ohc=_Rv1Z3S6xeAAX_fsdg_&_nc_ht=scontent.fzyl1-1.fna&oh=20f6bc8d542f0e80b29716bfbf10c58a&oe=613CFA70' alt=''>


           
         </img>

         <Typography align="center" style={{fontWeight : "bold",marginTop : "10px"}}>Fahim Ahmed Shojib</Typography>

         <Typography align="center" style={{fontWemarginTop : "10px",marginBottom : "10px"}}>Software Engineer at LiiLab</Typography>

       <Grid container style={{textAlign : "center",marginBottom : "20px"}} justifyContent ='center'>

       <LinkedInIcon style={{color : "#0976b4",fontSize : "30px",borderRadius : "50%"}}></LinkedInIcon>

       <FacebookIcon style={{color : "#3b5998",fontSize : "30px",borderRadius : "50%"}}></FacebookIcon>

       <InstagramIcon style={{color : "#b7242a",fontSize : "30px",borderRadius : "50%",marginBottom : "20px"}}></InstagramIcon>


       </Grid>

           
         </Paper>
            </Grid>


            <Grid item xs={6}>


<Paper style={{width : "50%",margin : "auto"}}>
<img style={{width : "100%",height : "420px",
margin : "auto"}} src='https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/240741428_1740242006168155_309313405005173785_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHdfXz26ztXk13auseFZJhTd2gkH__3Ts13aCQf__dOzRRyZgTm25CYo_YXJTgyK3Xjslnrxu-ts4OROQDCRpEp&_nc_ohc=sk83Ch212XoAX9P9bF2&_nc_ht=scontent.fzyl1-1.fna&oh=091a11e34249421d6264c71dc638609c&oe=615EB4A3' alt=''>



</img>

<Typography align="center" style={{fontWeight : "bold",marginTop : "10px"}}>Desh Roy Chowdhury</Typography>

<Typography align="center" style={{fontWemarginTop : "10px",marginBottom : "10px"}}>Software Engineer at ShohozDeal</Typography>

<Grid container style={{textAlign : "center",marginBottom : "20px"}} justifyContent ='center'>

<LinkedInIcon style={{color : "#0976b4",fontSize : "30px",borderRadius : "50%"}}></LinkedInIcon>

<FacebookIcon style={{color : "#3b5998",fontSize : "30px",borderRadius : "50%"}}></FacebookIcon>

<InstagramIcon style={{color : "#b7242a",fontSize : "30px",borderRadius : "50%",marginBottom : "20px"}}></InstagramIcon>


</Grid>


</Paper>
</Grid>


        </Grid>
      
    );
};

export default AdminPanel;