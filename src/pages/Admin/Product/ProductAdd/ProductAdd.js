import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../../../../constants/isLoading';
import { categoryActions } from '../../../../redux/actions/categoryActions';
import Sulov from '../../../../Sulov';
const axios = require('axios');
const ProductAdd = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState([]);

    

     const dispatch = useDispatch( );

     const initData =  useSelector(state => state.category); 


     const {category} = initData;

     console.log(initData)
     

      
     



    useEffect(() => {

        dispatch(categoryActions());

       

    }, []);


    const handleFileChange = (e) => {
        const newFile = e.target.files;



        setFile(newFile);

        console.log(newFile)

    }



    const handleBlur = e => {

        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData()
        // formData.append('file', file)

        const newFile = Object.values(file);

        


        newFile.forEach(f=>
            {
                formData.append('file',f);
            })

        formData.append('status', info.status);

        formData.append('star', info.star);

        formData.append('itemCount', info.itemCount);

        formData.append('title', info.title);
        formData.append('price', info.price);

        formData.append('description', info.description);

        formData.append('categoryTitle',info.categoryTitle);
        formData.append('categoryId',info.categoryId);









        fetch('http://localhost:5000/product/add', {
            method: 'POST',
            body: formData,

        })
            .then(response => response.json())
            .then(data => {

                if(data.insertCount)alert('successfully')
                console.log(data)


            })
            .catch(error => {
                console.error(error)
            })

          
    }

    
    const onChangeValue = e => {

       const data = category.filter(ct=>ct._id==e.target.value)[0];

     
       const newInfo = { ...info };

       newInfo.categoryId = data._id;
       newInfo.categoryTitle = data.title;



    setInfo(newInfo);



       

    }

    const onChangeStatus=(e)=>
    {
        const newInfo = { ...info };

        newInfo.status = e.target.value;

        setInfo(newInfo);


      
    }


    return (

        !isLoading(category)?<div>loading</div>:
        <div className='container'>

            <form onSubmit={handleSubmit}>



                <label htmlFor="exampleInputName1"><b>Title</b></label>
                <input onBlur={handleBlur} type="text" className="form-control" name='title'
                    id="inputTitle" placeholder="title" required />

                <label htmlFor="exampleInputName2"><b>Status</b></label>
                 
                

                <label htmlFor="exampleInputName3"><b>Star</b></label>
                <input onBlur={handleBlur} type="number" className="form-control" name='star'
                    id="inputStar" placeholder="star" required />

                <label htmlFor="exampleInputName4"><b>Price</b></label>
                <input onBlur={handleBlur} type="number" className="form-control" name='price'
                    id="inputPrice" placeholder="price" required />

                <label htmlFor="exampleInputName5"><b>Itme Count</b></label>
                <input onBlur={handleBlur} type="number" className="form-control" name='itemCount'
                    id="inputItemCount" placeholder="itemCount" required />

                <label htmlFor="exampleInputName5"><b>image</b></label>
                <input className="form-control" onChange={handleFileChange} type='file' multiple></input>


                    <div >
                    
                   { 
                   
                   category.map(ct=><div key={ct._id}><label for={ct.title}> <input onChange={onChangeValue} type="radio" value={ct._id} name="category"  required/>
                    <span style={{ marginLeft: '10px' }}>{ct.title}</span></label><br />
                    </div>)

                   }
                

                    </div>


                    <label> <input onChange={onChangeStatus} type="radio" value='active' name="status"  required/>
                    <span >Active</span></label>
                    <label> <input onChange={onChangeStatus} type="radio" value='inactive' name="status"  required/>
                    <span >Inactive</span></label>


                    <div className="form-group">
                        <label ><b>Item Details</b></label>
                        <textarea onBlur={handleBlur} class="form-control" name="description" 
                        placeholder="Write Something About Your Product" rows="10"></textarea>
                    </div>





                






                <br />




                <input type="submit" value="Submit" />



            </form>

        </div>
    );
};

export default ProductAdd;