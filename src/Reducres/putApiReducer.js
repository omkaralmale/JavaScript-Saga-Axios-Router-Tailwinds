import {
  PUT_API_FAILURE,
  PUT_API_REQUEST,
  PUT_API_SUCCESS,
} from "../Utils/Constant";

const intialState = {
  data: [],
  loading: false,
  error: null,
};

export const putApiReducer = (state = intialState, action) => {
  switch (action.type) {
    case PUT_API_REQUEST:
      return {
        ...state,
        data: action.payload,
        loading: true,
        error: null,
      };
    case PUT_API_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case PUT_API_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
