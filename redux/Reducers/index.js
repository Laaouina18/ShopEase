import { combineReducers } from 'redux';
import { reducerPayment}  from './ReducerPayement';
import { reducerCours } from './ReducerCours';
import { reducerCart } from './ReducerCart';
const rootReducer = combineReducers({
  payment: reducerPayment,
  cours: reducerCours,
  cart: reducerCart
});

export default rootReducer;
