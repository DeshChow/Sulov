import React, { useEffect } from 'react';
import { picUrl } from '../../constants/picUrl';

const SingleProductImages = (props) => {

    const {currentImg,setCurrentImg,pic} = props;



    useEffect(() => {

        setCurrentImg(pic[0]);
        console.log('dflksdfkkdsf',pic[0]);

        console.log('ok',currentImg);
      


      
    }, [])

     const handleClick=(picImg)=>setCurrentImg(picImg);

    return (
             pic.map((picImg)=>
                            <div  className="small-image-col">
          <img onClick={()=>handleClick(picImg)} src={picUrl(picImg)} width="100%"></img>
                            </div>
                                 )
    );
};

export default SingleProductImages;