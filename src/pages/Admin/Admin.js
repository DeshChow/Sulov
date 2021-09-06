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
import { useDispatch } from "react-redux";
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

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
};

const items = [
  {
    href: "/app/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/app/customers",
    icon: UsersIcon,
    title: "Customers",
  },
  {
    href: "/app/products",
    icon: ShoppingBagIcon,
    title: "Products",
  },
  {
    href: "/app/account",
    icon: UserIcon,
    title: "Account",
  },
  {
    href: "/app/settings",
    icon: SettingsIcon,
    title: "Settings",
  },
  {
    href: "/login",
    icon: LockIcon,
    title: "Login",
  },
  {
    href: "/register",
    icon: UserPlusIcon,
    title: "Register",
  },
  {
    href: "/404",
    icon: AlertCircleIcon,
    title: "Error",
  },
];

const drawerWidth = 180;

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

  const routeChange = (path) => {
    history.push(`/sulov/admin/${path}`);
  };

  useEffect(() => {
    dispatch(adminInitAction());
  }, []);

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

      default:
        return <ProductUpdate/>;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
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
          <Box sx={{ p: 2 }}>
            <List>
              <div
                style={{ marginTop: "20px" }}
                onClick={() => routeChange("dashboard")}
              >
                <BarChartIcon />
                Dashboard
              </div>

              <div
                style={{ marginTop: "20px" }}
                onClick={() => routeChange("customers")}
              >
                <UsersIcon />
                Customers
              </div>

              <div
                style={{ marginTop: "20px" }}
                onClick={() => routeChange("categories")}
              >
                <ShoppingBagIcon />
                Category
              </div>

              <div
                style={{ marginTop: "20px" }}
                onClick={() => routeChange("products")}
              >
                <ShoppingBagIcon />
                Products
              </div>



              <div
                style={{ marginTop: "20px" }}
                onClick={() => routeChange("contact")}
              >
                <ShoppingBagIcon />
                User Contact
              </div>

              <div
                style={{ marginTop: "20px" }}
                onClick={() => routeChange("orderhistory")}
              >
                <ShoppingBagIcon />
                Order History
              </div>
            </List>
          </Box>
        </div>
      </Drawer>
      <main className={classes.content}>
        <PageComponent />
      </main>
    </div>
  );
}
