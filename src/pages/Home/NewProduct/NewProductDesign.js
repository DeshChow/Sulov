import React from 'react';
import { picUrl } from '../../../constants/picUrl';

import { Col, Container, Row, Tab } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { productUrl } from '../../../urls';

const NewProductDesign = (props) => {

    const {price,title,pic,status,_id} = props.data;


    console.log('on hit',title);

    const history = useHistory();


    let id=0;


    return (


        <div elevation={5} style={{display: 'flex',justifyContent: 'center',alignItems: 'center',backgound:'red' ,padding : "20px",width : "50%",margin : "10px auto"}}>

            <div style={{minWidth:'200px', background: '#d1ffec',padding: '20px'}}>

                <h3 style={{marginTop: '5px',color: '#75cdff'}}>{title}</h3>
                <h4 style={{color: '#fec14e'}}>Price: {price}</h4>
                <h4 style={{color: '#00ab45'}}>{status==='active' ? 'Available' : 'Unavailable'}</h4>
                <Button onClick={()=>history.push(productUrl(title,_id))} style={{background: 'white',color: 'black'}}>Buy Now</Button>

            </div>

            <div>

      

            <img src={picUrl(pic[0])} style={{width: '90%', height: '400px'}}></img>


            </div>

            
        </div>
        
    );
};

export default NewProductDesign;