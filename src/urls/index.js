

export const categoryUrl = (category,id)=>
{

    if(category==undefined || id==undefined)
    return '/category/:category/:id';

    return `/category/${category}/${id}`;

}

export const productUrl =(product,id)=>
{
    if(product===undefined || id==undefined)
    return '/product/:product/:id';

    return `/product/${product}/${id}`;

    
}

export const checkOutUrl = ()=>
{
    return '/Sulov/chechout';
}

export const userOrderUrl = ()=>
{
    return '/Sulov/Order'
}

export const productUpdateurl=(id)=>id===undefined?
   '/admin/product/:id' : `/admin/product/${id}`


   export const loginUrl = () =>'/login'
