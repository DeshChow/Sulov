import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CategoryCard from '../../../Components/AllCard/CategoryCard/CategoryCard';
import { isLoading } from '../../../constants/isLoading';
// import spimg from '../../../images/spimg1.svg';
import spimg from '../../../images/spimg3.svg';
import './MainCategory.css';


const useStyles = makeStyles((theme) => ({
    CategoryGrid:
    {
        //#f5f5f5
        display: 'flex',
        background :'rgb(34, 43, 69)',
        paddingBottom : theme.spacing(5),

    },
    headP: {
        textAlign:'center',
        fontSize: '1rem',
        color: '#00ab55',
        textTransform: 'capitalize',
        display: 'block',
        paddingTop : '50px',
    },
    head :{
        textAlign:'center',
        fontSize: '2rem',
        fontWeight: '600',
        color: '#fff',
        paddingBottom: '20px',
        position: 'relative',
        margin: '15px 0 50px',
        '&::before': {
            content: '" "',
            position: 'absolute',
            left: '0',
            bottom: '0',
            width: '5rem',
            height: '3px',
            background: '#00ab55',
            borderRadious: '20px',
            left: '50% !important',
            transform: 'translateX(-50%)',
        },
    }
   
  }));



const MainCategory = () => {
    const classes = useStyles();



    const initData = useSelector(st => st.category);

    const { category } = initData;



    return (
         <div id="category">
        <Container className={classes.CategoryGrid} maxWidth='xl'>
                <img className="spimg" src={spimg} alt="spimg" />
                <Container maxWidth="md" >
                <Typography className={classes.headP}  gutterBottom>
                   What To Buy
                </Typography>
                <Typography className={classes.head} gutterBottom>
                            Find Your Category
                </Typography>
            <Grid className={classes.GridStyle} container spacing={4} justify='center'>
                {
                    isLoading(category) ? category.map(ct =>

                        <Grid  item xs={12} sm={6} md={4} >
                            <CategoryCard key={ct._id} data={ct}></CategoryCard>
                        </Grid>
                    )
                     : <Grid>Loadding</Grid>
                }
            </Grid>
        </Container>
        </Container>
        </div>
    

        //         <div className='container-fluid' style={{ background: 'red' }} >

        //       <div className="row">
        //           <div className="col-lg-2">
        //       <img src={spimg} alt="spimg" />
        //           </div>
        //           <div className="col-lg-10">
        //        <div className='container' >

        //   <div className='row'>

        //             {
        //     isLoading(category) ?

        //     category.map(ct=>

        //         <div className='col-md-4 col-sm-6 col-xs-12 col-lg-4'>
        //         <CategoryCard key={ct._id} data={ct}></CategoryCard>
        //         </div>) : <p>Loadding</p>
           
        // }
        //      </div>
        //      </div>
        //     </div>
        //     </div>
        //     </div>
       

    );
};

export default MainCategory;