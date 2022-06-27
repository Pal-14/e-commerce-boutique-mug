import {createStore} from 'redux';
import cartReducer from './reducer/cartReducer';

// creation du store 

const store = createStore(cartReducer)

export default store;