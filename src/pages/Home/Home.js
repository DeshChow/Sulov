import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { categoryActions } from '../../redux/actions/categoryActions';
import ContactUS from './ContactUS/ContactUS';
import MainCategory from './MainCategory/MainCategory';
import NewProduct from './NewProduct/NewProduct';
import RandomProduct from './RandomProduct/RandomProduct';
import Footer from './../../Components/Footer/Footer';
import { authAction } from './../../redux/actions/authAction';


const Home = () => {

    const dispatch = useDispatch();

   // const category = useSelector(st => st.category);

   const auth = useSelector(state=>state.auth);

    




    useEffect(()=>
    {
        if(auth!==undefined && auth.email!==undefined)
        dispatch(authAction({
            email : auth.email
        }))


        dispatch(categoryActions());


    },[])




    return (

    
      
         <React.Fragment>
         
       <Header/>

         <MainCategory/>
         
             <RandomProduct/> 
             <NewProduct/> 
             <ContactUS/>
             <div style={{background: '#222B45', height: '500px', width: '100%'}}>sduifyhuisdh</div>
             <Footer/>
       </React.Fragment>
    
     
           
        
    );
};

export default Home;