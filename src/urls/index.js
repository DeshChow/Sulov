

export const categoryUrl = (category,id)=>
{

    if(category==undefined || id==undefined)
    return '/category/:category/:id';

    return `/category/${category}/${id}`;

}

export const productUrl =(product,id)=>
{
    if(product==undefined || id==undefined)
    return '/product/:product/:id';

    return `/product/${product}/${id}`;

    
}