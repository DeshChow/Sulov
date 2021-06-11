import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { picUrl } from '../../constants/picUrl';
import { isLoading } from '../../constants/isLoading'
import { singleClearProductAction, singleProductAction } from '../../redux/actions/singleProductAction';
import './SingleProduct.css';
import SingleProductImages from './SingleProductImages';
import { Button, Container, Grid } from '@material-ui/core';
import ProductCard from '../../Components/AllCard/ProductCard/ProductCard';
import { singleCategoryAction } from '../../redux/actions/singleCategoryAction';
import NavbarInside from '../../Components/NavbarInside/NavbarInside';
import { shoppingCartActions } from '../../redux/actions/shoppingCartActions';

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
            price : totalPrice

}));
    }

    const Counter = (now) => {
        if (now == '-') setCurQuantity(Math.max(1,curQuantity - 1));

        else setCurQuantity(curQuantity + 1);
    }


   

    return (

        <div>

            <NavbarInside/>


            {Object.keys(singleProduct).length == 0 ? <div>loadding</div> :



                <div className="small-container singleProduct">
                    <div className="row">
                        <div className="col-6">
                            <img src={picUrl(currentImg)} width="100%"></img>

                            <div>
                                <div className="small-image-row">

                                    {

                                        pic.map((picImg, idx) =>
                                            <div className="small-image-col" key={idx}>

                                                <img onClick={() => handleClick(picImg)} src={picUrl(picImg)} width="100%"></img>
                                            </div>
                                        )

                                        //   <SingleProductImages currentImg={currentImg} setCurrentImg={setCurrentImg} pic={pic}/>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h1>{title}</h1>
                            <h4>{price}</h4>
                            <h5>{itemCount}</h5>
                            <h5>{status}</h5>
                            <h5>{star}</h5>
                            <select>
                                {/* <input type="number">Select Size</input> */}
                                <option>Select Size</option>
                                <option>XXL</option>
                                <option>XL</option>
                                <option>L</option>
                                <option>M</option>
                                <option>S</option>
                            </select>


                            <div>
                        <span style={{marginRight:'10px'}}>Quantity: </span>
                        <button className="spinner" role='button' onClick={() => Counter('-')}>-</button>

                <span className="spin"><input type='number' value={curQuantity}></input></span>

                        <button className="spinner" role='button' onClick={() => Counter('+')}>+</button>


                        {/* <span className="addtocartsp">{product.name ? <button className="addtocartbtn" onClick={AddToCart}><AiOutlineShoppingCart className="hov" size="1.5em" style={{paddingRight:'5px',paddingBottom: '3px', color:'black'}}/><span className="addbtntext">Add to Cart</span></button> : <span></span>}</span>
                   
                    */}
                   
                    </div>


              

                <Button onClick={addToCart} variant='contained' color = 'primary'>
                    Add TO Cart</Button>
                         
                            <h3>Product Details<i className="fa fa-indent"></i></h3>
                            <br></br>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>


                    <Container maxWidth='xl'>


                        <Grid container spacing={2} justify='center' wrap='wrap'>

                            {
                                isLoading(products) ? categoryProducts.map(ct =>

                                    <Grid item >
                                        <ProductCard key={ct._id} data={ct}></ProductCard>
                                    </Grid>
                                )
                                    : <Grid>Loadding</Grid>

                            }

                        </Grid>

                    </Container>





                </div>}

                            

                       
            
      

                


    
        </div>

    );
};

export default SingleProduct;