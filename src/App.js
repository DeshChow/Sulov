import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import CategoryAdd from "./pages/Admin/Category/CategoryAdd/CategoryAdd";

import ProductAdd from './pages/Admin/Product/ProductAdd/ProductAdd';
import CategoryProduct from "./pages/CategoryProduct/CategoryProduct";
import Home from './pages/Home/Home';
import MainCategory from "./pages/Home/MainCategory/MainCategory";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { categoryUrl, productUrl } from "./urls";

function App() {
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

      <CategoryAdd/>




        </Route>

        <Route  path={categoryUrl()}>

     
      <CategoryProduct/>



        </Route>

        <Route path={productUrl()}>

            <SingleProduct/>

        </Route>


      </Switch>


    </Router>
  );
}

export default App;
