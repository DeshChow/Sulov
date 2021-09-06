import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import ProductCard from "../../Components/AllCard/ProductCard/ProductCard";
import { isLoading } from "../../constants/isLoading";
import {
  clearSingleCategoryAction,
  singleCategoryAction,
} from "../../redux/actions/singleCategoryAction";
import "./CategoryProduct.css";

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

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Container, Grid } from "@material-ui/core";
import NavbarInside from "../../Components/NavbarInside/NavbarInside";
import { categoryActions } from "./../../redux/actions/categoryActions";
import { categoryUrl } from "./../../urls/index";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
}
}));

function CategoryProduct() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { id } = useParams();

  const data = useSelector((state) => state.singleCategory);

  const category = useSelector((state) => state.category.category);

  const { products } = data;

  const history = useHistory();

  const routeChange = (category, id) => {
    return history.push(categoryUrl(category, id));
  };

  useEffect(() => {
    dispatch(singleCategoryAction(id));

   

    return dispatch(clearSingleCategoryAction());
  }, [id]);

  useEffect(() => {
   

    dispatch(categoryActions());

    return ()=>
    {

    }
  }, []);


  // console.log('one ',category[0]);

  return category === undefined ? (
    <div>Loading</div>
  ) : (

    <>
    <div className={classes.root}>
      <CssBaseline />

      <NavbarInside />
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

            {
              category.map(data=><ListItem
                button
                onClick={() => routeChange(data.title,data._id)}
              >
                <ListItemIcon>
                
                  <InboxIcon />
                </ListItemIcon>
  
                <ListItemText primary={data.alternativeTitle} />
              </ListItem>
  )


            }

          


          </List>
        </div>
      </Drawer>
      <main className={classes.content} style={{ 
        backgroundColor: "#ededed",minHeight  : "100vh" }}>
        <Toolbar />

        <Container maxWidth="xl">
          <Grid container spacing={2} justify="center" wrap="wrap">
            {isLoading(products) ? (
              products.map((ct) => (
                <Grid item>
                  <ProductCard key={ct._id} data={ct}></ProductCard>
                </Grid>
              ))
            ) : (
              <Grid>Loadding</Grid>
            )}
          </Grid>
        </Container>
        {/* <div className="container-fluid" style={ {backgroundColor: '#ededed'}}>
         <div className="d-flex  flex-wrap align-items-center justify-content-center stl">
         {
                        isLoading(products) ? products.map(ct =>

                            
                                <ProductCard key={ct._id} data={ct}></ProductCard>
                            
                        )
                            : <div>Loadding</div>

                    }

         </div>
         </div> */}

      </main>
    </div>
    </>
   
  
  );
}

export default CategoryProduct;
