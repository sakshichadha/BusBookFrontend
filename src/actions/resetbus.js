import axios from "axios";

import { RESETBUS, BUS_ERROR } from "./types";
export const resetbus = (busId) => async (dispatch) => {
  {
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const body = { busId: busId };

    const res = await axios.post("/api/users/resetbus", body, config);
    dispatch({
      type: RESETBUS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BUS_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
export default resetbus;
