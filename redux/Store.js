import { createStore } from "redux";
import  rootReducer  from "./Reducers/index";
import {reducer} from "./Reducers"
const store = createStore(reducer);

export default store;