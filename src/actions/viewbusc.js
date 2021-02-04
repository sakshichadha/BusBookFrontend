import axios from "axios";
import { VIEWBUS, BUS_ERROR } from "./types";
import { setAlert } from "./alert.js";
// Register User
export const viewbusc = ({ from, to, date }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ from, to, date });
  try {
    const res = await axios.post("/api/users/viewbuses_c", body, config);

    dispatch({
      type: VIEWBUS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BUS_ERROR,
    });
  }
};
