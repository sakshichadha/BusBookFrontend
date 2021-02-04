import {
  ADD_BUS,
  BUS_ERROR,
  VIEWBUS,
  BUS,
  BOOKBUS,
  RESETBUS,
  SEAT_DETAILS,
} from "../actions/types";

const initialState = {
  loading: true,
  category: null,
  buscustomer: [],
  error: [],
  bus: null,
  details_state: null,
};

function Main(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEAT_DETAILS: {
      return {
        ...state,
        details_state: payload,
        loading: false,
      };
    }
    case RESETBUS:
    case BOOKBUS:
    case BUS: {
      return {
        ...state,
        bus: payload,
        loading: true,
      };
    }
    case VIEWBUS: {
      return {
        ...state,
        buscustomer: payload,
        loading: false,
      };
    }

    case ADD_BUS: {
      return {
        ...state,
        loading: false,
      };
    }

    case BUS_ERROR:
      return {
        ...state,
        error: payload,
        buscustomer: [],
        loading: false,
        bus: null,
      };

    default:
      return state;
  }
}
export default Main;
