import axios from "axios";

import { SEAT_DETAILS, BUS_ERROR } from "./types";
export const details = (seatNumber, busId) => async (dispatch) => {
  {
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const body = { seatNumber: seatNumber, busId: busId };

    const res = await axios.post("/api/users/details", body, config);

    dispatch({
      type: SEAT_DETAILS,
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
export default details;
