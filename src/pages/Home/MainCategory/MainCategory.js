import React from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from '../../../Components/AllCard/CategoryCard/CategoryCard';

const MainCategory = () => {


    const initData = useSelector(st => st.category);

    const {category} = initData;


    const dataIsLoad = ()=>category != undefined;


    return (
        <div>
            main
            {
        dataIsLoad()? category.map(ct=><CategoryCard key={ct._id} data = {ct}></CategoryCard>)
        : <div>loadding</div>
    }
        </div>
    );
};

export default MainCategory;