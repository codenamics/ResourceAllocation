import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  ERROR_LOGIN,
  LOGOUT,
  ACCOUNT_DELETED,
  SET_CURRENT_USER,
  CLEAR_ERROR
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  admin: null,
  loading: true,
  user: null,
  errors: []
};

export default function (state = initialState, action) {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SET_CURRENT_USER:

      return {
        ...state,
        isAuthenticated: true,
          loading: false,
          admin: payload.user.admin,
          user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        admin: payload.user.admin,
          isAuthenticated: true,
          loading: false
      };
    case REGISTER_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
          isAuthenticated: false,
          admin: false,
          loading: false,
          user: null
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errors: action.payload
      }
      case CLEAR_ERROR:
        return {
          ...state,
          errors: []
        }
        default:
          return state;
  }
}