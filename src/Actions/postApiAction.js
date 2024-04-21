import {
  POST_API_FAILURE,
  POST_API_REQUEST,
  POST_API_SUCCESS,
} from "../Utils/Constant";

export const postApiRequest = (payload) => {
  return {
    type: POST_API_REQUEST,
    payload: payload,
  };
};

export const postApiSuccess = (data) => {
  return {
    type: POST_API_SUCCESS,
    payload: data,
  };
};

export const postApiFailure = (error) => {
  return {
    type: POST_API_FAILURE,
    payload: error,
  };
};
