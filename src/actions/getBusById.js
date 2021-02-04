import axios from "axios";

import { BUS, BUS_ERROR } from "./types";
export const getBusById = (bus_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/bus/${bus_id}`);

    dispatch({
      type: BUS,
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
