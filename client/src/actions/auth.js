import axios from "axios";

import jwt_decode from "jwt-decode";
import {
  ERROR_LOGIN,
  LOGOUT,
  CLEAR_PROFILE,
  SET_CURRENT_USER,
  CLEAR_ERROR
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Register User
export const register = ({ name, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    name,
    password
  });

  try {
    const res = await axios.post("/api/users", body, config);
    const { token } = res.data;
    setAuthToken(token);
    localStorage.setItem("token", token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    const errors = err.response.data;

    dispatch({
      type: ERROR_LOGIN,
      payload: errors
    });
  }
};

// Login User
export const login = (name, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    name,
    password
  });

  try {
    const res = await axios.post("/api/auth/login", body, config);
    const { token } = res.data;
    setAuthToken(token);
    localStorage.setItem("token", token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    const errors = err.response.data;

    dispatch({
      type: ERROR_LOGIN,
      payload: errors
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  });
  dispatch({
    type: LOGOUT
  });
};

export const ClearError = () => dispatch => {
  dispatch({
    type: CLEAR_ERROR
  });
};
