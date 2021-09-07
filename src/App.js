import { createContext, useState } from "react";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import NavbarInside from "./Components/NavbarInside/NavbarInside";
import Admin from "./pages/Admin/Admin";
import CategoryAdd from "./pages/Admin/Category/CategoryAdd/CategoryAdd";

import ProductAdd from "./pages/Admin/Product/ProductAdd/ProductAdd";
import CategoryProduct from "./pages/CategoryProduct/CategoryProduct";
import CheckOut from "./pages/CheckOut/CheckOut";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder";
import Home from "./pages/Home/Home";
import MainCategory from "./pages/Home/MainCategory/MainCategory";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { categoryUrl, checkOutUrl, productUrl, userOrderUrl } from "./urls";
import Login from "./pages/Login/Login";
import ProductUpdate from './pages/Admin/Product/ProductUpdate/ProductUpdate';
import { productUpdate, productUpdateurl } from './urls/index';
import Profile from "./pages/Profile/Profile";
import PrivateRoute from './Components/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [orderInfo, setOrderInfo] = useState({});

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/AddProduct">
          <ProductAdd />
        </Route>

        <Route exact path={productUpdateurl()}>
          <ProductUpdate />
        </Route>



        <Route exact path="/AddCategory">
          <CategoryAdd />
        </Route>

        <Route path={categoryUrl()}>
          <CategoryProduct />
        </Route>

        <Route path={productUrl()}>
          <SingleProduct />
        </Route>

        <Route path={checkOutUrl()}>
          <OrderDetails />
        </Route>

        <PrivateRoute path="/sulov/admin/:id">

     
          <Admin />
     
        </PrivateRoute>

        <PrivateRoute path="/profile">
         
         <Profile/>
        </PrivateRoute>

        <PrivateRoute path={userOrderUrl()}>
          <UserContext.Provider value={[orderInfo, setOrderInfo]}>
            <CheckOut />
          </UserContext.Provider>
        </PrivateRoute>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
