import React from 'react';
import { useState } from 'react';
import { CssBaseline, Container, Paper, Box , Button,makeStyles, Grid, Typography } from "@material-ui/core";

import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from 'react-router';
import { HistoryOutlined } from '@material-ui/icons';


const CategoryAdd = () => {

    const [file,setFile] = useState(null);

    const history = useHistory();

    // const [title,setTitle]=useState('');

    const [data,setData] = useState({})

    const handleFileChange=(e)=>
    {
        const newFile = e.target.files[0];

        setFile(newFile);

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData()

        formData.append('file', file);

        formData.append('title',data.title);

        formData.append('alternativeTitle',data.alternativeTitle);

        // formData.append('alternativeName',);



        fetch('http://localhost:5000/category/add', {
            method:'POST',
            body: formData,
           
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)

                history.push('/sulov/admin/categories')

               
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleBlur = e => {

      const newData = {...data};

      newData[e.target.name] = e.target.value;

      setData(newData);

    }
    
   return (
        <div>

<CssBaseline />
        <Container component={Box} p={4}>
         
    

          <Paper component={Box} p={5}>


              <Typography align='center' style={{margin : "15px 0px",fontWeight : "bold",fontSize : "25px"}}>

                  Category Add
              </Typography>

          <form onSubmit={handleSubmit}>
              <br/>

          <label htmlFor="exampleInputName1"><b>Image</b></label>
          <br/>

<input onChange={handleFileChange} type='file' required></input>

<br/>
<br/>

  


                 <label htmlFor="exampleInputName1"><b>Name</b></label>
                 
                  <input onBlur={handleBlur} type="text" className="form-control" name='title' id="inputTitle" placeholder="title" required />
         

                 
<br/>

  


                 <label htmlFor="exampleInputName1"><b>Alternative Title</b></label>
                 
                  <input onBlur={handleBlur} type="text" className="form-control" name='alternativeTitle' 
                  id="alternativeTitle" placeholder="alternative title" required />
         

     <br/>




     {/* <input type="submit" value="Submit"/> */}

     <Grid container justify='center' style={{textAlign : "center"}}>


         <Grid item xs={12} >

         <Button
        variant="contained"
        color="primary"
        size="medium"
        type="submit"
        // className={classes.button}
        // onClick={handleSubmit}
        startIcon={<SaveIcon />}
      >
        Submit
      </Button>



         </Grid>
     </Grid>

                  



     </form>




          </Paper>

          </Container>

           
           

         
        </div>
    );
};

export default CategoryAdd;