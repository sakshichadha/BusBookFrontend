import axios from "axios";
import { GET_BUSES_ADMIN, BUS_ERROR } from "./types";
import { setAlert } from "./alert.js";
// Register User
export const getbuses = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("action of get_buses_admin");
  //const body = JSON.stringify({ bus_id, from, to, start_time, end_time, date });
  try {
    const res = await axios.get("/api/users/viewbuses_a", config);

    dispatch({
      type: GET_BUSES_ADMIN,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((errors) => dispatch(setAlert(errors.msg, "danger")));
    }

    dispatch({
      type: BUS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
