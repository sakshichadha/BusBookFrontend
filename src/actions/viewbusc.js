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
  console.log(from,to,date);
  const body = JSON.stringify({ from, to, date });
  try {
    console.log("before here");
    const res = await axios.post("/api/users/viewbuses_c", body, config);
    console.log("after");
    console.log(res);

    dispatch({
      type: VIEWBUS,
      payload: res.data,
    });
  } catch (err) {
    // const errors = err.responsebuses
    dispatch({
      type: BUS_ERROR,
    });
  }
};
