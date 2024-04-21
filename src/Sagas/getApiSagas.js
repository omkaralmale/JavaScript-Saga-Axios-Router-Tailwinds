import { put, call } from "redux-saga/effects";
import { getApiFailure, getApiSuccess } from "../Actions";
import { API_ENDPOINTS } from "../Utils/Constant";
import { GET_API } from "../Services/Api/AxiosInstance";

function* getApiSaga(action) {
  try {
    const res = yield call(GET_API, API_ENDPOINTS.GET_DATA);
    yield put(getApiSuccess(res));
  } catch (error) {
    yield put(getApiFailure(error));
  }
}

export default getApiSaga;
