import axios from "axios";
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("Fetch succes", res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("errors!", err);
      dispatch({ type: FETCH_ERROR, payload: err });
    });
};

export const ADD_DATA = "ADD_DATA";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: ADD_DATA });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      console.log("add succes", res.data);
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("errors!", err);
      dispatch({ type: ADD_ERROR, payload: err });
    });
};
