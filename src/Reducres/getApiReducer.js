import {
  GET_API_FAILURE,
  GET_API_REQUEST,
  GET_API_SUCCESS,
} from "../Utils/Constant";

const intialState = {
  data: [],
  loading: false,
  error: null,
};

export const getApiReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_API_REQUEST:
      return {
        ...state,
        data: action.payload,
        loading: true,
        error: null,
      };
    case GET_API_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case GET_API_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
