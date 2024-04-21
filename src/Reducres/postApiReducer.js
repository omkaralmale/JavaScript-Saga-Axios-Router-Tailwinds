import {
  POST_API_FAILURE,
  POST_API_REQUEST,
  POST_API_SUCCESS,
} from "../Utils/Constant";

const intialState = {
  data: [],
  loading: false,
  error: null,
};

export const postApiReducer = (state = intialState, action) => {
  switch (action.type) {
    case POST_API_REQUEST:
      return {
        ...state,
        data: action.payload,
        loading: true,
        error: null,
      };
    case POST_API_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case POST_API_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
