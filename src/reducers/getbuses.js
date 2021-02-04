import { GET_BUSES_ADMIN, BUS_ERROR } from "../actions/types";
const initialState = {
  loading: true,
  buses: [],
  error: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BUSES_ADMIN:
      return {
        ...state,
        loading: false,
        buses: payload,
      };

    case BUS_ERROR:
      return {
        ...state,
        error: payload,
        buses: null,
        loading: false,
      };

    default:
      return state;
  }
}
