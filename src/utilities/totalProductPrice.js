

export const TotalProductPrice=(products,type)=>
    {
       

        console.log('hash ',products);

       

        let sum=0;


        products.forEach(pd => {

            sum+=pd.price;

            
        });

        sum=sum+Math.ceil(0.07*sum);

        return type? `৳ ${sum.toFixed(2)}` : sum;
    }