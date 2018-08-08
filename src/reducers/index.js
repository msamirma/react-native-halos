import { combineReducers } from "redux";
import * as loginReducers from "./loginReducers";

export default combineReducers(Object.assign(loginReducers));
