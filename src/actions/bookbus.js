import axios from "axios";

import { BOOKBUS, BUS_ERROR } from "./types";
export const bookbus = (seatNumber, id) => async (dispatch) => {
  {
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const body = { seatNumber: seatNumber, id: id };

    const res = await axios.post("/api/users/book_bus", body, config);

    dispatch({
      type: BOOKBUS,
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
export default bookbus;
