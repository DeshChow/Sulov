import React from 'react';
import { picUrl } from '../../../constants/picUrl';

import { Col, Container, Row, Tab } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';

const NewProductDesign = (props) => {

    const {price,title,pic,status} = props.data;


    console.log('on hit',title);


    let id=0;


    return (

        <div elevation={5} style={{display: 'flex',justifyContent: 'center',alignItems: 'center',backgound:'red' ,padding : "20px",width : "50%",margin : "10px auto"}}>

            <div style={{width:'400px', height: '200px', background: '#d1ffec',padding: '20px'}}>

                <h3 style={{marginTop: '5px',color: '#75cdff'}}>{title}</h3>
                <h4 style={{color: '#fec14e'}}>Price: {price}</h4>
                <h4 style={{color: '#00ab45'}}>{status==='active' ? 'Available' : 'Unavailable'}</h4>
                <Button style={{background: 'white',color: 'black'}}>Buy Now</Button>

            </div>

            <div>

            <img src={picUrl(pic)} style={{width: '70%'}}></img>

            </div>

            
        </div>
        // <Tab.Pane eventKey={id + 1}>
            // <Row >
            //     <Col lg={12} md={12} xs={12}>
                  
            //             <div className={`pricing-img-${id + 1}`}>
            //                 <div className={`pricing-text-${id + 1}`}>
            //                     <span><small>$</small>{price}</span>
            //                     <h4><Link to="/">{title}</Link></h4>
            //                     {/* <p>{description.slice(0, 94)}</p> */}
            //                 </div>
            //                 <img style={{height:'20%'}} src={picUrl(pic)} alt="" />
            //             </div>
                  
            //     </Col>
            // </Row>
        // </Tab.Pane>
    );
};

export default NewProductDesign;