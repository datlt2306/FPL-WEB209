import { createStore } from "redux";
import counterReducer from "../reducers/counter";

const store = createStore(counterReducer); // state => counterReducer

export default store;
