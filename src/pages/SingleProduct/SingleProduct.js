import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { picUrl } from '../../constants/picUrl';
import { isLoading } from '../../constants/isLoading'
import { singleClearProductAction, singleProductAction } from '../../redux/actions/singleProductAction';
import './SingleProduct.css';
import SingleProductImages from './SingleProductImages';
import { Button, Container, Grid, Paper ,Box, CssBaseline, Typography} from '@material-ui/core';
import ProductCard from '../../Components/AllCard/ProductCard/ProductCard';
import { singleCategoryAction } from '../../redux/actions/singleCategoryAction';
import NavbarInside from '../../Components/NavbarInside/NavbarInside';
import { shoppingCartActions } from '../../redux/actions/shoppingCartActions';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import Footer from '../../Components/Footer/Footer';
import LoaderComponent from '../../Components/LoaderComponent/LoaderComponent';
import { SMALL } from '../../constants/types';
import { Loader } from 'react-feather';


const SingleProduct = () => {

    const dispatch = useDispatch();

    const { id } = useParams();





    const singleProduct = useSelector(state => state.singleProduct);


    const { pic, title, itemCount, star, status, price,category } = singleProduct;

    let category_id;

    if(category!=undefined)
      category_id = category.id;



    const [currentImg, setCurrentImg] = useState('');

    const data = useSelector(state => state.singleCategory);

    const {products} = data;

    const [curQuantity, setCurQuantity] = useState(1);

    let categoryProducts = [];

    if(products!=undefined)
    {
        categoryProducts = products.filter(pd=>pd._id!=id);
    }

    useEffect(() => {
        dispatch(singleProductAction(id));
        setCurQuantity(1);
        return ()=> {

            dispatch(singleClearProductAction());
        }
    }, [id])


    useEffect(()=>
    {
        dispatch(singleCategoryAction(category_id));
        setCurQuantity(1);

    },[category_id])

    useEffect(() => {
        if (pic)
            setCurrentImg(pic[0]);
            setCurQuantity(1);
    }, [title]);

    // <img src={picUrl(pic)}></img> 
    const handleClick = (picImg) => setCurrentImg(picImg);

    const addToCart = ()=>
    {
        console.log('hamaisi');

        const totalPrice = curQuantity * price ;


        dispatch(shoppingCartActions({

            id,
            pic : pic[0],
            title,
            quantity : curQuantity,
            price : totalPrice,

        }));
    }

    const Counter = (now) => {
        if (now == '-') setCurQuantity(Math.max(1,curQuantity - 1));

        else setCurQuantity(curQuantity + 1);
    }

   let starElements= [0,0,0,0,0];
   let cnt=star;
   for(let i=0; i<cnt; i+=1){
      starElements[i]=1;
   }
   
   let itemStatus;

   if(itemCount>0)
        itemStatus= 'Available';
   else
        itemStatus= 'Unavailable'

   let itemCountStatus;

   if(itemCount>1)
       itemCountStatus='are remaining'; 
   else
       itemCountStatus='is remaining';

    return (
        <>

        <div>

            <NavbarInside/>



            {Object.keys(singleProduct).length == 0 ? <LoaderComponent/> :


                <div>
                <div className="small-container singleProduct" style={{background: 'white'}}>
                    <div className="row">
                        <div className="col-6">
                            <div className="imgContent">
                            <img src={picUrl(currentImg)} className="main-img"></img>
                            </div>

                            

                            <div>
                                <div className="small-image-row">

                                    {

                                pic.length>1 &&        pic.map((picImg, idx) =>
                                            <div className="small-image-col" key={idx}>
                                                <div>
                                                <img onClick={() => handleClick(picImg)} src={picUrl(picImg)} className="smallImage"></img>
                                                </div>
                                            </div>
                                        )

                                        //   <SingleProductImages currentImg={currentImg} setCurrentImg={setCurrentImg} pic={pic}/>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h1 id="productTitle">{title}</h1>
                            <a id="categoryTitleFull">Visit the <span id="categoryTitle">{category.title}</span> store</a>
                            <br></br>
                            <br></br>
                            <div >
                            <span style={{fontSize: '14px',marginRight: '10px'}}>Ratings :    </span>
                            { 
                                 starElements.map((value, index) => {
                                     if(value==1)
                                        return <StarOutlinedIcon style={{fontSize: '20px',color: 'orange'}}></StarOutlinedIcon>
                                     else
                                        return <StarOutlinedIcon style={{fontSize: '20px',color: 'gray'}}></StarOutlinedIcon>
                                 })  

                            }

                            <span style={{fontSize: '10px',marginLeft: '20px'}}>|</span>

                            <span  style={{fontSize: '14px',marginLeft: '20px'}}>This Product is <span id="availability">{itemStatus}</span> now</span>
                            
                            </div>

                            <hr></hr>

                            <p style={{fontSize: '16px',fontWeight:'400',color: '#26a541'}}>Special Price</p>
                            <h3 id="singleTaka">৳{price}</h3>
                            <p style={{color: 'gray'}}> <FiberManualRecordIcon style={{fontSize: '10px'}}/> {itemCount} of this product {itemCountStatus} in the store</p>
                         

                            <div>

                    <div style={{display: 'flex'}}>

                    <div>
                        <span style={{fontSize: '16px',fontWeight:'400',marginRight:'10px'}}>Quantity to Order : </span>
                        <button className="spinner" role='button' onClick={() => Counter('-')}>-</button>

                        <span className="spin"><input type='number' value={curQuantity}></input></span>

                        <button className="spinner" role='button' onClick={() => Counter('+')}>+</button>


                        {/* <span className="addtocartsp">{product.name ? <button className="addtocartbtn" onClick={AddToCart}><AiOutlineShoppingCart className="hov" size="1.5em" style={{paddingRight:'5px',paddingBottom: '3px', color:'black'}}/><span className="addbtntext">Add to Cart</span></button> : <span></span>}</span>
                   
                    */}

                 </div>

                 <div style={{marginLeft: 'auto'}}>

                       <span>
                           <Button onClick={addToCart} variant='contained' style={{background: '#fb641b',marginRight: '20px',color: 'white'}}>
                              <ShoppingCartSharpIcon style={{marginRight: '5px'}}/>   Add To Cart     
                            </Button>

                        </span>

                </div>

                </div>
                   
                    </div>

                           
                           <hr></hr>
                         
                            <h3>Product Details<i className="fa fa-indent"></i></h3>
                            <br></br>
                            <p id="productDetails">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <br></br>
                  
                   <>
                   <CssBaseline/>
                    <Container   Component={Box} p={4} maxWidth='xl' style={{background: '#EDEDED'}}
                    style={{marginTop : "20px"}}>

                    
                        <Paper Component={Box} p={4} style={{background: '#EDEDED'}}>
                           <h3 style={{textAlign: 'center',paddingTop: '20px',marginBottom: '20px'}}>
                            <span style={{  borderBottom: '1px solid #000'}}>More items to explore</span></h3>
                       
                            <Grid container spacing={2} justify='center' wrap='wrap' >
                            {
                                isLoading(products) ?categoryProducts.map(ct =>
                                    <Grid item >
                                        <ProductCard key={ct._id} data={ct}></ProductCard>
                                    </Grid>
                                
                                )
                                
                                    :     <LoaderComponent type={SMALL}/>

                            }
                        </Grid>

                         </Paper>
                    </Container>

                    </>
                </div>
                {/* <div  style={{marginTop: '120px'}}>
                    <Footer></Footer>
                </div> */}
                </div>}
        </div>

        </>

    );
};

export default SingleProduct;