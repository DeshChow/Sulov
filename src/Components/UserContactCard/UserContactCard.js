import { Paper } from '@material-ui/core';
import React from 'react';

const UserContactCard = (props) => {


    const {first_name,last_name,email,mobile,text} = props.contact;



    return (
        <Paper style={{background: "white", color : "black"}} elevation={4}>

         < div style={{pading : "8px",margin : "20px"}}>

        

         {first_name}  {last_name}<br/>

         {email}<br/> {mobile}<br/>
         {text}
         
         </div>

        </Paper>
    );
};

export default UserContactCard;