import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import NavbarInside from "./Components/NavbarInside/NavbarInside";
import CategoryAdd from "./pages/Admin/Category/CategoryAdd/CategoryAdd";

import ProductAdd from './pages/Admin/Product/ProductAdd/ProductAdd';
import CategoryProduct from "./pages/CategoryProduct/CategoryProduct";
import CheckOut from "./pages/CheckOut/CheckOut";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder";
import Home from './pages/Home/Home';
import MainCategory from "./pages/Home/MainCategory/MainCategory";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { categoryUrl, checkOutUrl, productUrl, userOrderUrl } from "./urls";


export const UserContext = createContext();


function App() {


  const [orderInfo, setOrderInfo] = useState({});



  return (
    <Router>



      <Switch>
          

        <Route exact path='/'>


          <Home></Home>


        </Route>



        <Route exact path='/AddProduct'>

          <ProductAdd />




        </Route>

        <Route exact path='/AddCategory'>

          <CategoryAdd />




        </Route>

        <Route path={categoryUrl()}>


          <CategoryProduct />



        </Route>

        <Route path={productUrl()}>

          <SingleProduct />

        </Route>

        <Route path={checkOutUrl()}>

         <OrderDetails/>

        </Route>

        <Route path={userOrderUrl()}>

      <UserContext.Provider value={[orderInfo, setOrderInfo]}>

      <CheckOut/>

      </UserContext.Provider>
         

        </Route>


      </Switch>


    </Router>
  );
}

export default App;
