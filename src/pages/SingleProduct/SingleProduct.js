import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { picUrl } from '../../constants/picUrl';
import {isLoading} from '../../constants/isLoading'
import { singleProductAction } from '../../redux/actions/singleProductAction';
import './SingleProduct.css';
import SingleProductImages from './SingleProductImages';

const SingleProduct = () => {

     const dispatch = useDispatch();

     const {id} = useParams();

     

     const singleProduct = useSelector(state=>state.singleProduct);


     const {pic,title,itemCount,star,status,price} = singleProduct;

    

     const [currentImg,setCurrentImg]=useState('');


  
    useEffect(()=>
    {

        dispatch(singleProductAction(id));
       



    },[])

    useEffect(()=>
    {

      if(pic)
      setCurrentImg(pic[0]);



    },[title]);

    // <img src={picUrl(pic)}></img> 
    const handleClick=(picImg)=>setCurrentImg(picImg);
    
    return (
        Object.keys(singleProduct).length==0 ? <div>loadding</div> : 
        <div className="small-container singleProduct">
            <div className="row">
                <div className="col-6">
                    <img src={picUrl(currentImg)} width="100%"></img>

                    <div>
                        <div className="small-image-row">

                             {

                                 pic.map((picImg,idx)=>
                            <div className="small-image-col" key={idx}>
                                <img onClick={()=>handleClick(picImg)} src={picUrl(picImg)} width="100%"></img>
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
                    <input type="number" value="1"></input>
                    <a href="" class="btn">Add To Cart</a>
                    <h3>Product Details<i className="fa fa-indent"></i></h3>
                    <br></br>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
        
    );
};

export default SingleProduct;