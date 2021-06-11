import React from 'react';
import { ADD_TO_SHOPPING_CART, CLEAR_SHOPPING_CART, DELETE_TO_SHOPPING_CART } from '../../constants/types';




const initialState = [];



const shoppingCartReducers = (state=initialState,action) => {
    console.log(action.type,action.payload);
  
      switch(action.type)
      {
        case ADD_TO_SHOPPING_CART : 
             
            const allCart = state.filter(st=>st.id!=action.payload.id);



            return [...allCart,action.payload];

        
        case DELETE_TO_SHOPPING_CART: 

        const newCart = state.filter(st=>st.id!=action.payload.id);

        console.log(newCart);



        return [...newCart];
             

        case CLEAR_SHOPPING_CART : 
            return [];

        default :  return state;
      }
};

export default shoppingCartReducers;