import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Button, CardContent } from '@material-ui/core';
import {picUrl} from '../../../constants/picUrl'
import './AdminProductCard.css';
import { Paper } from '@material-ui/core';
import swal from 'sweetalert';
import axios from 'axios';
import { useHistory } from 'react-router';
import ProductUpdate from './../../../pages/Admin/Product/ProductUpdate/ProductUpdate';
import { productUpdateurl } from './../../../urls/index';

const useStyles = makeStyles({
    root: {
      width: '90%',
      margin : "auto",
      height: 380,
      margin: '10px',
      padding : "10px 0px",

      background : "white"
    },
    content: {

        width : "100%"

    }
  });
  

const AdminProductCard = (props) => {

    const classes = useStyles();

    const {title,pic,star,itemCount,price,status,_id} = props.pd;

    const {setState,state} = props;

    const history = useHistory();

    const routeChange=()=>
    {
        history.push(`/sulov/admin/${_id}`)
         
        // console.log('amaisiiaiaia', productUpdateurl(_id))
    }

   
    const handleDelete=()=>
    {
        return swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                axios.delete(`http://localhost:5000/product/${_id}`)
        .then((res) => {

            console.log(res);

            if(res.data.deleted)
            {

                swal(res.data.message, {
                    icon: "success",
                  });

                  setState(!state)

            //   window.location.reload(false);

           
           
            }

            else
            {
                swal(res.data.message);

            }


        });


            
            } else {
              swal("Your Product is safe!");
            }
          });
    }
    return (
//         <Card  className={classes.root}>
//             <CardContent clssName={classes.content}>
//             <div  className="adminWrap">
//                 <h4>{title}</h4>
//             </div>
//             <div className="adminWrap" >
//                 <img className="adminimgWrapdetails"  src={ picUrl(pic[0]) }></img>
// 		    </div>
            
//             <div className='container rowContent' 
// >                <div style={{flexGrow : 1,width : "50%"}}>Star: {star}</div>
//                 <div  style={{flexGrow : 1, width : "50%"}}>Item Remaining: {itemCount}</div>
//             </div>
//             <div  className="container rowContent">
//                 <div  style={{flexGrow : 1,width : "50%"}}>Price: {price}</div>
//                 <div  style={{flexGrow : 1,width : "50%"}}>Status: {status}</div>
//             </div>                             
            
//             <div>

//          <div className='container rowContent' style={{marginTop : "20px"}}>

//                     <div style={{flexGrow : 1,width : "50%",margin : "auto"}}>

//                     <Button >UPDATE</Button>



//                     </div>

//                     <div style={{flexGrow : 1,width : "50%"}}>
                        
// <Button>DELETE</Button>
//                     </div>




//                 </div>


        

//             </div>
       
//             </CardContent>
//         </Card>

<Paper  className={classes.root} >
             <div  className="adminWrap">
                 <h4 >{title}</h4>
             </div>
             <div className="adminWrap" >
                 <img className="adminimgWrapdetails"  
                 src={ picUrl(pic[0]) } alt=''></img>
 		    </div>
            
          <div className='rowContent' >  
          
            <div style={{flexGrow : 1,width : '50%'}}>Star: {star}</div>
                <div  style={{flexGrow : 1,width : '50%'}}>Item Remaining: {itemCount}</div>


            </div>
            <div  className="rowContent">
                <div  style={{flexGrow : 1,width : '50%'}}>Price: {price}</div>
                <div  style={{flexGrow : 1,width : '50%'}}>Status: {status}</div>
            </div>                             
            
            <div>

         <div className='rowContent' style={{marginTop : "20px"}}>

                    <div style={{flexGrow : 1,width : "50%"}}>

                    <Button style={{background : '#17A2B8',
                    color : "white",
                    width : '80%'

               
                
                }}

                onClick={routeChange}
                
                >UPDATE</Button>



                    </div>

                    <div style={{flexGrow : 1,width : "50%"}}>
                        
<Button onClick = {handleDelete} style={{background : 'red',
                    color : "white", width : '80%',

                

               
                
                }}>DELETE</Button>
                    </div>




                </div>


        

            </div>

</Paper>

    );
};

export default AdminProductCard;