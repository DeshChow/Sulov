import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProductCard from '../../Components/AllCard/ProductCard/ProductCard';
import { isLoading } from '../../constants/isLoading';
import { singleCategoryAction } from '../../redux/actions/singleCategoryAction';

// const CategoryProduct = () => {

//     const dispatch = useDispatch();

//     const {id} = useParams();

//   const data = useSelector(state => state.singleCategory);
  
//   const {products} = data;



//     useEffect(() => {

//         dispatch(singleCategoryAction(id));


      
//     }, []);
//     return (
//         <div>
//            {
//                isLoading(products) ? <div>

//                    {
//                        products.map(pd=><ProductCard key={pd._id} data={pd}/>)
//                    }
//                </div> : <p>loadding</p>   

//            } 
//         </div>
//     );
// };

// export default CategoryProduct;



import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Container, Grid } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

 function CategoryProduct() {


  const classes = useStyles();


  const dispatch = useDispatch();

  const {id} = useParams();

const data = useSelector(state => state.singleCategory);

const {products} = data;



  useEffect(() => {

      dispatch(singleCategoryAction(id));


    
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar  position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >


        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
           
            
            
            <ListItem button >
                <ListItemIcon> <InboxIcon /> </ListItemIcon>


                <ListItemText primary={'desh'} />




              </ListItem>

              
          
              <ListItem button >
                <ListItemIcon><MailIcon /> </ListItemIcon>


                <ListItemText primary={'shojib'} />




              </ListItem>
          </List>
        
       
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

        <Container maxWidth='lg'>

        <Grid container spacing={4} justify='center'>

     

        {
                        isLoading(products) ? products.map(ct =>

                            <Grid  item xs={12} sm={6} md={4} >
                                <ProductCard key={ct._id} data={ct}></ProductCard>
                            </Grid>
                        )
                            : <Grid>Loadding</Grid>

                    }



      
            


       

            </Grid>

        </Container>

        
       
      </main>
    </div>
  );
}

export default CategoryProduct;