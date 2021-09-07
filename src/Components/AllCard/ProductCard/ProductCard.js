import { Card } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { productUrl } from '../../../urls';
import './ProductCard.css';
import {picUrl} from '../../../constants/picUrl'
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    const history = useHistory();


    const {data} = props;


    const {pic,title,price,_id,status,itemCount} = data;




    

    const routeChange=(product,id)=>
    {
        console.log(product);

      return history.replace(productUrl(product,id));


    }
    


    
   
      

    return (

        <Link to={productUrl(title,_id)} style={{textDecoration: 'none', color: 'black'}}>
        <div className="mainCard">
        <div className="cardContent">
		 <div className="cornerStyle"></div>
		<div className="imgWrap">
        <img   src={ picUrl(pic[0]) }></img>
		</div>
		<div className="contentWrap">
			<h3 className="titleName">{title}</h3>
            
            <i className="fas fa-tag price" /><span className="priceStyle"> Tk.{price}</span>
            {/* <p className="price">{price}</p> */}

			<div className="innerContentWrap">
			   <span className="innerTK">Tk: <span className="innerPrice">{price}</span></span>
		       <span><p className={itemCount>0  ? "available" : "notAvailable"}></p></span>
               <span ><i className="fas fa-star"></i></span>
               {/*star ar kam  */}
				<div className="iconsCard">
					<span className="iconCard icon1"><i className="fas fa-globe-europe"></i></span>
					<span className="iconCard icon2"><i className="fas fa-cart-plus"></i></span>
					<span className="iconCard icon3"><i className="far fa-heart"></i></span>
				</div>
			</div>
		</div>
        </div>
	</div>
     </Link>
    
    );
};

export default ProductCard;