import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reduxThunk from 'redux-thunk';
import adminInitReducer from "../reducers/adminInitReducers";
import authReducers from "../reducers/authReducers";
import categoryReducers from "../reducers/categoryReducers";
import shoppingCartReducers from "../reducers/shoppingCartReducers";
import singleCategoryReducers from "../reducers/singleCategoryReducers";
import singleProductReducers from "../reducers/singleProductReducers";
import allProductReducer from '../reducers/allProductReducer'
import userContactReducer from './../reducers/userContactReducer';
import orderHistoryReducer from './../reducers/orderHistoryReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth','shoppingCart']
}


const rootReducers=combineReducers({
    
     auth :  authReducers,

     shoppingCart :  shoppingCartReducers,

     category : categoryReducers,

     singleCategory : singleCategoryReducers,

     singleProduct : singleProductReducers,

     adminInitData : adminInitReducer,

     allProduct : allProductReducer,

     userContact:  userContactReducer,

     orderHistory : orderHistoryReducer



      
  });

  const persistedReducer = persistReducer(persistConfig, rootReducers)

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
export const persistor = persistStore(store);