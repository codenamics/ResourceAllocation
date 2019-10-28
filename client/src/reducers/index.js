import { combineReducers } from "redux";
import auth from "./auth";
import year from "./year";
import admin from "./admin";

export default combineReducers({
  auth,
  year,
  admin
});
