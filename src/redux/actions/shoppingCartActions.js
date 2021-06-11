import { ADD_TO_SHOPPING_CART, CLEAR_SHOPPING_CART, DELETE_TO_SHOPPING_CART } from "../../constants/types"




export const shoppingCartActions=(data)=>
{
       return {

            type : ADD_TO_SHOPPING_CART,
            payload : data
       }

}

export const deleteShoppingActions=(id)=>
{
     console.log('holo ',id);
    return {

        type : DELETE_TO_SHOPPING_CART,
        payload : {
            id : id
        }
    }
}

export const clearShoppingCart = ()=>
{
    return {

        type : CLEAR_SHOPPING_CART,
        payload : {}
    }
}