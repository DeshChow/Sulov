import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from './../../../redux/actions/categoryActions';
import { Container, Typography, Grid, makeStyles, Button } from '@material-ui/core';
import { isLoading } from './../../../constants/isLoading';
import CategoryCard from './../../../Components/AllCard/CategoryCard/CategoryCard';
import { useHistory } from 'react-router'
import LoaderComponent from '../../../Components/LoaderComponent/LoaderComponent';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
    CategoryGrid:
    {
        //#f5f5f5
        display: 'flex',
        // background :'rgb(34, 43, 69)',
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




const CategoryInfo = () => {

    const classes = useStyles();
    
    const dispatch = useDispatch();

   // const category = useSelector(st => st.category);
    

   const initData = useSelector(st => st.category);

    const { category } = initData;


    React.useEffect(()=>
    {
        dispatch(categoryActions());


    },[])

    const history = useHistory()

   
    const handleClick = () => {
  
        history.push(`/sulov/admin/addCategory`);
    
    };
 
    return (

        <>

<Grid container justifyContent='center'>
<Grid item xs={12}>
         
          </Grid>
    </Grid>
        <Container className={classes.CategoryGrid} maxWidth='xl'>


      
        {/* <img className="spimg" src={spimg} alt="spimg" /> */}
        <Container maxWidth="lg" >
        {/* <Typography className={classes.headP}  gutterBottom>
           What To Buy
        </Typography>
        <Typography className={classes.head} gutterBottom>
                    Find Your Category
        </Typography> */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '20px'}}>
           <Button onClick={handleClick} style={{ background: "#1A2138",color: 'white'}}
              startIcon={<AddIcon />}>
              ADD Category
            </Button>
        </div>
    <Grid className={classes.GridStyle} container spacing={4} justify='center'>
        {
            isLoading(category) ? category.map(ct =>

                <Grid  item xs={12} sm={6} md={4} >
                    <CategoryCard key={ct._id} data={ct}></CategoryCard>
                </Grid>
            )
             : <LoaderComponent/>
        }
    </Grid>
</Container>
</Container>

</>
    );
};

export default CategoryInfo;