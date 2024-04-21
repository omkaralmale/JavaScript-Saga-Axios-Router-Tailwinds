import {
  DELETE_API_FAILURE,
  DELETE_API_SUCCESS,
  DELETE_API_REQUEST,
} from "../Utils/Constant";
export const deleteApiRequest = (payload) => {
  return {
    type: DELETE_API_REQUEST,
    payload: payload,
  };
};

export const deleteApiSuccess = (data) => {
  return {
    type: DELETE_API_SUCCESS,
    payload: data,
  };
};

export const deleteApiFailure = (error) => {
  return {
    type: DELETE_API_FAILURE,
    payload: error,
  };
};
