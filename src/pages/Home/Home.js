import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import { categoryActions } from '../../redux/actions/categoryActions';
import MainCategory from './MainCategory/MainCategory';
import NewProduct from './NewProduct/NewProduct';
import RandomProduct from './RandomProduct/RandomProduct';

const Home = () => {

    const dispatch = useDispatch();

   // const category = useSelector(st => st.category);
    




    useEffect(()=>
    {
        dispatch(categoryActions());


    },[])




    return (
        <div className='container'>

            <MainCategory/>
            <RandomProduct/>
            <NewProduct/>
  
       
     
           
        </div>
    );
};

export default Home;