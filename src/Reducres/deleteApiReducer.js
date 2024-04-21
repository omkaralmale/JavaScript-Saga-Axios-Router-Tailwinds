import {
  DELETE_API_FAILURE,
  DELETE_API_REQUEST,
  DELETE_API_SUCCESS,
} from "../Utils/Constant";

const intialState = {
  data: [],
  loading: false,
  error: null,
};

export const deleteApiReducer = (state = intialState, action) => {
  switch (action.type) {
    case DELETE_API_REQUEST:
      return {
        ...state,
        data: action.payload,
        loading: true,
        error: null,
      };
    case DELETE_API_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case DELETE_API_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
