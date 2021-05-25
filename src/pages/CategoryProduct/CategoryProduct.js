import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductCard from '../../Components/AllCard/ProductCard/ProductCard';
import { isLoading } from '../../constants/isLoading';
import { singleCategoryAction } from '../../redux/actions/singleCategoryAction';

const CategoryProduct = () => {

    const dispatch = useDispatch();

    const {id} = useParams();

  const data = useSelector(state => state.singleCategory);
  
  const {products} = data;



    useEffect(() => {

        dispatch(singleCategoryAction(id));


      
    }, []);
    return (
        <div>
           {
               isLoading(products) ? <div>

                   {
                       products.map(pd=><ProductCard key={pd._id} data={pd}/>)
                   }
               </div> : <p>loadding</p>   

           } 
        </div>
    );
};

export default CategoryProduct;