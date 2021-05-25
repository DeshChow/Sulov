import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reduxThunk from 'redux-thunk';
import categoryReducers from "../reducers/categoryReducers";
import singleCategoryReducers from "../reducers/singleCategoryReducers";
import singleProductReducers from "../reducers/singleProductReducers";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth']
}


const rootReducers=combineReducers({
    
     auth : ()=>"fahim",

     category : categoryReducers,

     singleCategory : singleCategoryReducers,

     singleProduct : singleProductReducers,



      
  });

  const persistedReducer = persistReducer(persistConfig, rootReducers)

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
export const persistor = persistStore(store);