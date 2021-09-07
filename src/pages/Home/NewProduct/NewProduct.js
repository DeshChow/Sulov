import React from 'react';
import { Col, Container, Nav, Row, Spinner, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { isLoading } from '../../../constants/isLoading';
import { picUrl } from '../../../constants/picUrl';
import './NewProduct.css';
import NewProductDesign from './NewProductDesign';

import { Grid } from '@material-ui/core';
import { ConfirmationNumber, SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import LoaderComponent from '../../../Components/LoaderComponent/LoaderComponent';
import { SMALL } from '../../../constants/types';

const NewProduct = () => {

    const initData = useSelector(st=>st.category);

   

    const {newlyAddedProduct} = initData;

    const [data,setData] = React.useState();


    const handleProductChange = (idx)=>
    {
        // console.log('idxxxx ',idx)
        setData(newlyAddedProduct[idx]);

        

        // console.log('ok ',data)

   
    
      //  setData(newData)
    }


    React.useEffect(()=>
    {

       if(newlyAddedProduct!==undefined) setData({...newlyAddedProduct[0]})

    },[newlyAddedProduct])

    console.log('test ',data)

    // console.log(active)

//    // console.log(newlyAddedProduct,data);

    return (

        (!isLoading(newlyAddedProduct) || data===undefined)? <LoaderComponent type={SMALL}/> : 

        
       
        <div id="newproduct">

        <section className="pricing-section" id="pricing">
                <Container className="my-md-5" >
                    <Col xs={12} >
                        <div className="pricing-title text-center" >
                            <span>New For You</span>
                            <h2>New Arrival Product</h2>
                        </div>
                    </Col>
                    <Row >
                        <Col xs={12}>
                            <Tab.Container defaultActiveKey="1" >
                                <Nav className="pricing-nav"  style={{

            display : "flex",
            justifyContent : "center",
            
            textAlign : "center"}} >
                                    <Nav.Item className="pricing-content-1" onClick = {()=>handleProductChange(0)}>
                                        <Nav.Link eventKey="1">
                                            <img alt="" src={picUrl(newlyAddedProduct[0].pic[0])} width="35" height="35" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="pricing-content-2" onClick = {()=>handleProductChange(1)}>
                                        <Nav.Link eventKey="2">
                                            <img alt="" src={picUrl(newlyAddedProduct[1].pic[0])} width="40" height="40" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="pricing-content-3" onClick = {()=>handleProductChange(2)}>
                                        <Nav.Link eventKey="3">
                                            <img alt="" src={picUrl(newlyAddedProduct[2].pic[0])} width="35" height="35" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="pricing-content-4" onClick = {()=>handleProductChange(3)}>
                                        <Nav.Link eventKey="4">
                                            <img alt="" src={picUrl(newlyAddedProduct[3].pic[0])} width="40" height="40" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="pricing-content-5" onClick = {()=>handleProductChange(4)}>
                                        <Nav.Link eventKey="5">
                                            <img alt="" src={picUrl(newlyAddedProduct[4].pic[0])} width="36" height="36" />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="pricing-content-6" >
                                        <Nav.Link eventKey="6"  onClick = {()=>handleProductChange(5)}>
                                            <img alt="" src={picUrl(newlyAddedProduct[5].pic[0])} width="40" height="40" />
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>

                     
                                    
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>

                   
                </Container>

                <Grid container justify='center' style={{textAlign : "center",padding: "30px"}}>

<Grid item xs={12}>

      <NewProductDesign  data={data} />)
</Grid>



</Grid>
        </section>

</div>



        // <div className='container-fluid'>
        //         newproduct

        //         {isLoading(newlyAddedProduct) ? <div>

        //             {
        //                 newlyAddedProduct.map(pd=><img style={{height : '22rem',width : '22rem'}}src={picUrl(pd.pic)}></img>)
        //             }

        //         </div> : <div>Loading...</div>

        //     }
        // </div>
    );
};

export default NewProduct;