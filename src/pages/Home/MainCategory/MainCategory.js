import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CategoryCard from '../../../Components/AllCard/CategoryCard/CategoryCard';
import { isLoading } from '../../../constants/isLoading';


const useStyles = makeStyles((theme) => ({
    CategoryGrid:
    {
        background :'#f5f5f5',
        paddingBottom : theme.spacing(5)

    },
    headP: {
        textAlign:'center',
        fontSize: '1rem',
        color: '#ed5217',
        textTransform: 'capitalize',
        display: 'block',
        paddingTop : '50px'
        
    },
    head :{
        textAlign:'center',
        fontSize: '2rem',
        fontWeight: '600',
        color: '#444',
        paddingBottom: '20px',
        position: 'relative',
        margin: '15px 0 50px'
    }
  }));



const MainCategory = () => {
    const classes = useStyles();



    const initData = useSelector(st => st.category);

    const { category } = initData;



    return (

     
        <Container className={classes.CategoryGrid} maxWidth="xl" >
            
                    <Container maxWidth="md" >

                    <Typography className={classes.headP}  gutterBottom>
                               What to Buy
                    </Typography>


                        <Typography className={classes.head}  gutterBottom>
                                Choose Your Category
                        </Typography>

           



                <Grid container spacing={4} justify='center'>





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













        //         <div className='container-fluid' style={{ background: 'red' }} >



        //        <div className='container' >

        //   <div className='row'>

        //             {
        //     dataIsLoad() ?

        //     category.map(ct=>

        //         <div className='col-md-4 col-sm-6 col-xs-12 col-lg-4'>
        //         <CategoryCard key={ct._id} data={ct}></CategoryCard>
        //         </div>)
        //     : <p>loadding</p>
        // }
        //      </div>

        //     </div>

        //     </div>


    );
};

export default MainCategory;