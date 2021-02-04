import axios from "axios";
//import {setAlert} from './alert';
import { RESETBUS, BUS_ERROR } from "./types";
export const resetbus = (busId) => async (dispatch) => {
  {
    console.log("entering action RESET");
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const body = { busId: busId };
    console.log(body);
    console.log("resetBus action");
    const res = await axios.post("/api/users/resetbus", body, config);
    console.log(res.data);
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
