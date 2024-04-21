import {
  PUT_API_FAILURE,
  PUT_API_REQUEST,
  PUT_API_SUCCESS,
} from "../Utils/Constant";

export const putApiRequest = (payload) => {
  return {
    type: PUT_API_REQUEST,
    payload: payload,
  };
};

export const putApiSuccess = (data) => {
  return {
    type: PUT_API_SUCCESS,
    payload: data,
  };
};

export const putApiFailure = (error) => {
  return {
    type: PUT_API_FAILURE,
    payload: error,
  };
};
