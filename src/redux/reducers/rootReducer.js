
import { combineReducers } from 'redux';
import products from './productReducer';
import carts from './cartReducer';

export default combineReducers({ products, carts });

