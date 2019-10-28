import axios from "axios";
import { FETCH_ALL, ADD_YEAR, DELETE_YEAR } from "./types";

export const fetchAll = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.get("/api/allocation/", config);
    dispatch({
      type: FETCH_ALL,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const addNewYear = (data, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/allocation/", data, config);
    dispatch({
      type: ADD_YEAR,
      payload: res.data
    });
    history.push("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

export const deleteYear = id => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.delete(`/api/allocation/${id}`, config);

    dispatch({
      type: DELETE_YEAR,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const addProject = (id, history) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    await axios.post(`/api/allocation/addProject/${id}`, config);
    dispatch(fetchAll());
  } catch (err) {
    console.log(err);
  }
};

export const update = (id, year_id, data) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    await axios.put(`/api/allocation/${year_id}/${id}`, data, config);

    dispatch(fetchAll());
  } catch (err) {
    console.log(err);
  }
};

export const deleteProject = (id, year_id) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    await axios.delete(`/api/allocation/${year_id}/${id}`, config);

    dispatch(fetchAll());
  } catch (err) {
    console.log(err);
  }
};
