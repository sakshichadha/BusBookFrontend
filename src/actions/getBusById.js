import axios from "axios";
//import {setAlert} from './alert';
import { BUS, BUS_ERROR } from "./types";
export const getBusById = (bus_id) => async (dispatch) => {
  try {
    console.log(bus_id);
    const res = await axios.get(`/api/users/bus/${bus_id}`);
    console.log(res);
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
