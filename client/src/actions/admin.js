import axios from "axios";

import { FETCH_ALL_YEARS, DELETE_USER_ALLO } from "./types";

export const fetchYear = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.get("/api/admin/years", config);

    dispatch({
      type: FETCH_ALL_YEARS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
//Delete user allocation
export const deleteUserAllo = (user_id, allo_id, id) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    await axios.delete(
      `/api/admin/allocation/${user_id}/${allo_id}/${id}`,
      config
    );

    dispatch({
      type: DELETE_USER_ALLO
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUserAllo = (
  user_id,
  allo_id,
  id,
  JSONdata
) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log(JSONdata);
  try {
    await axios.put(`/api/admin/${user_id}/${allo_id}/${id}`, JSONdata, config);
    dispatch({
      type: DELETE_USER_ALLO
    });
  } catch (err) {
    console.log(err);
  }
};
