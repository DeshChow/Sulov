import React from 'react';
import { useHistory } from 'react-router';
import { categoryUrl } from '../../../urls';

const CategoryCard = (props) => {

    const {pic,_id,title} = props.data;

    console.log(pic);

    const str = `http://localhost:5000/${pic}`;

    const history = useHistory();


    const routeChange = (category,id)=>
    {
       return history.push(categoryUrl(category,id));
    }



    return (
        <div>
            <img onClick={()=>routeChange(title,_id)} src={str}></img>
        </div>
    );
};

export default CategoryCard;