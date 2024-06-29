import { configureStore } from "@reduxjs/toolkit";
import hackerInitialState from './reducers/hackerNewsReducer.js'
import hackerNewsReducer from "./reducers/hackerNewsReducer.js";

export default configureStore({
    reducer: hackerNewsReducer
})