import axios from "axios";
import { ADD_BUS, BUS_ERROR } from "./types";
import { setAlert } from "./alert.js";
// Register User
export const Addbus_action = ({
  bus_id,
  from,
  to,
  start_time,
  end_time,
  date,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("action");
  const body = JSON.stringify({ bus_id, from, to, start_time, end_time, date });
  try {
    const res = await axios.post("/api/users/addbus", body, config);

    dispatch({
      type: ADD_BUS,
      payload: res.data,
    });
  } catch (err) {
    // const errors = err.responsebuses
    dispatch({
      type: BUS_ERROR,
    });
  }
};
