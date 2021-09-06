import React from 'react';
import { picUrl } from '../../../constants/picUrl';

import { Col, Container, Row, Tab } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

const NewProductDesign = (props) => {

    const {price,title,pic} = props.data;


    console.log('on hit',title);





    return (

        <Paper elevation={5} style={{background : "white", padding : "20px",width : "50%",margin : "10px auto"}}>


            {title}

            {/* <img src={pic}></img> */}
        </Paper>
        // <Tab.Pane eventKey={id + 1}>
        //     <Row >
        //         <Col lg={12} md={12} xs={12}>
                  
        //                 <div className={`pricing-img-${id + 1}`}>
        //                     <div className={`pricing-text-${id + 1}`}>
        //                         <span><small>$</small>{price}</span>
        //                         <h4><Link to="/">{title}</Link></h4>
        //                         {/* <p>{description.slice(0, 94)}</p> */}
        //                     </div>
        //                     <img style={{height:'20%'}} src={picUrl(pic)} alt="" />
        //                 </div>
                  
        //         </Col>
        //     </Row>
        // </Tab.Pane>
    );
};

export default NewProductDesign;