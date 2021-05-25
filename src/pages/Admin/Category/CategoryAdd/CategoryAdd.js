import React from 'react';
import { useState } from 'react';

const CategoryAdd = () => {

    const [file,setFile] = useState(null);

    const [title,setTitle]=useState('');

    const handleFileChange=(e)=>
    {
        const newFile = e.target.files[0];

        setFile(newFile);

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData()

        formData.append('file', file);

        formData.append('title',title);



        fetch('http://localhost:5000/category/add', {
            method:'POST',
            body: formData,
           
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)

               
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleBlur = e => {

      const newTitle = e.target.value;

      setTitle(newTitle);

    }
    
   return (
        <div>

             <form onSubmit={handleSubmit}>

       <input onChange={handleFileChange} type='file'></input>

       <br/>

         

      
                        <label htmlFor="exampleInputName1"><b>Name</b></label>
                        
                         <input onBlur={handleBlur} type="text" className="form-control" name='title' id="inputTitle" placeholder="title" required />
                
            <br/>




            <input type="submit" value="Submit"/>



            </form>

           

         
        </div>
    );
};

export default CategoryAdd;