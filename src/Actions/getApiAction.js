import {
  GET_API_FAILURE,
  GET_API_REQUEST,
  GET_API_SUCCESS,
} from "../Utils/Constant";

export const getApiRequest = (payload) => {
  return {
    type: GET_API_REQUEST,
    payload: payload,
  };
};

export const getApiSuccess = (data) => {
  return {
    type: GET_API_SUCCESS,
    payload: data,
  };
};

export const getApiFailure = (error) => {
  return {
    type: GET_API_FAILURE,
    payload: error,
  };
};
