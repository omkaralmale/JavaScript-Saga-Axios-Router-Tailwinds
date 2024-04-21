// Your main file where you use axiosInstance
import axios from "axios";
import { getBaseUrl } from "./ApiConfig";

// * CREATING INSTANCE OF AXIOS INSTANCE
const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-type": "application/json",
  },
});

//* POST request example with optional query parameters
export const POST_API = async (PATH, data, queryParams = {}) => {
  try {
    const config = { params: queryParams };
    const response = await axiosInstance.post(PATH, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// * GET request example with optional query parameters
export const GET_API = async (PATH, queryParams = {}) => {
  try {
    const config = { params: queryParams };
    const response = await axiosInstance.get(PATH, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// * PUT request example with optional query parameters
export const PUT_API = async (PATH, id, updatedData, queryParams = {}) => {
  try {
    const config = { params: queryParams };
    const response = await axiosInstance.put(
      `${PATH}/${id}`,
      updatedData,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// * DELETE request example with optional query parameters
export const DELETE_API = async (PATH, id, queryParams = {}) => {
  try {
    const config = { params: queryParams };
    const response = await axiosInstance.delete(`${PATH}${id}`, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// * PATCH request example with optional query parameters
export const PATCH_API = async (PATH, id, updatedFields, queryParams = {}) => {
  try {
    const config = { params: queryParams };
    const response = await axiosInstance.patch(
      `${PATH}${id}`,
      updatedFields,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
