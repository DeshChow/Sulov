import React, { useEffect, useState } from "react";
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
import Dashboard from "./Dashboard/Dashboard";
import { useDispatch,useSelector } from "react-redux";
import { adminInitAction } from "../../redux/actions/adminInitActions";
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

import {
  Link as RouterLink,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import PropTypes from "prop-types";
import { Avatar, Box, Button, Hidden } from "@material-ui/core";
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from "react-feather";
import ProductsInfo from "./ProductsInfo";
import CustomersInfo from "./CustomersInfo";
import Contact from "./Contact/Contact";
import ProductAdd from "./Product/ProductAdd/ProductAdd";
import CategoryInfo from "./CategoryInfo/CategoryInfo";
import CategoryAdd from "./Category/CategoryAdd/CategoryAdd";
import ProductUpdate from "./Product/ProductUpdate/ProductUpdate";
import OrderHistory from './OrderHistory/OrderHistory';
import { SIGN_OUT } from './../../constants/types';
import { signOutAction } from "../../redux/actions/authAction";
import GroupIcon from '@material-ui/icons/Group';
import HistoryIcon from '@material-ui/icons/History';
import CategoryIcon from '@material-ui/icons/Category';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AdminPanel from './AdminPanel/AdminPanel';
const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background : "#1A2138"
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
    marginTop: "70px",

    background: "#f5f5f5",

    minHeight: "100vh",
  },
}));

export default function Admin() {
  const { id } = useParams();

  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const auth = useSelector(state=>state.auth)

  const routeChange = (path) => {

    if(path===SIGN_OUT)
    return dispatch(signOutAction())

    else
    history.push(`/sulov/admin/${path}`);
  };

  useEffect(() => {
    dispatch(adminInitAction());
  }, []);

  useEffect(()=>
  {

    if(auth.email!=process.env.REACT_APP_admin1 && auth.email!=process.env.REACT_APP_admin2)
      return  history.push(`/`);

  },[])

  const PageComponent = () => {
    switch (id) {
      case "products":
        return <ProductsInfo />;

      case "customers":
        return <CustomersInfo />;

      case "contact":
        return <Contact/>

      case "addProduct":
        return <ProductAdd/>

      case "categories":
        return <CategoryInfo/>

      case "addCategory":
        return <CategoryAdd/>

      case "orderhistory":
        return <OrderHistory/>

      case "dashboard":
        return <Dashboard></Dashboard>

      case "admin":
        return <AdminPanel></AdminPanel>
      
      
      

      default:
        return <ProductUpdate/>;
    }
  };


  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography>
                <a className="logo-container">
                        <i className="fas fa-shopping-cart fa-lg"> </i>
                        <h4 className="logo">Sulov</h4>
                </a>
          </Typography>
          <Typography variant="h6" noWrap style={{position : "absolute",right: "20px"}}>
           {auth!==undefined && auth.name}
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
          <Box sx={{ p: 2 }}>
            <List>
              <div
                style={{ marginTop: "20px",cursor : "pointer"  }}
                onClick={() => routeChange("dashboard")}
              >
                <BarChartIcon />
                Dashboard
              </div>

              <div
                style={{ marginTop: "20px",cursor : "pointer"  }}
                onClick={() => routeChange("customers")}
              >
                <UsersIcon />
                Customers
              </div>

              <div
                style={{ marginTop: "20px",cursor : "pointer"  }}
                onClick={() => routeChange("categories")}
              >
                <CategoryIcon />
                
                Category
              </div>

              <div
                style={{ marginTop: "20px",cursor : "pointer"  }}
                onClick={() => routeChange("products")}
              >
                <ShoppingBagIcon />
                Products
              </div>



              <div
                style={{ marginTop: "20px" ,cursor : "pointer" }}
                onClick={() => routeChange("contact")}
              >
                <GroupIcon />
                User Contact
              </div>

              <div
                style={{ marginTop: "20px" ,cursor : "pointer" }}
                onClick={() => routeChange("orderhistory")}
              >
                <HistoryIcon />
                Order History
              </div>

              <div
                style={{ marginTop: "20px",cursor : "pointer" }}
                onClick={() => routeChange("admin")}
              >
                <SupervisorAccountIcon />
               Admin
              </div>

              
            </List>

           
          </Box>
        </div>
        <Divider/>
        <div
                style={{ marginTop: "20px" ,marginLeft: '15px'}}
                onClick={() => routeChange(SIGN_OUT)}
              >
                <ExitToAppIcon/>
               Logout
              </div>
      </Drawer>
      <main className={classes.content}>
        <PageComponent />
      </main>
    </div>
  );
}
