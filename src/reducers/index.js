import auth from "./auth";
import Addbus_reducer from "./Addbus_reducer";
import getbuses from "./getbuses";
import { combineReducers } from "redux";
import alert from "./alert";

export default combineReducers({ alert, auth, Addbus_reducer, getbuses });
