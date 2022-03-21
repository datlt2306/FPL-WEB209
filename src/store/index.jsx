import { createStore } from 'redux';
import productReducer from '../reducers/product';

const store = createStore(productReducer);
export default store;