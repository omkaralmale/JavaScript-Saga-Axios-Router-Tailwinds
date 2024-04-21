import { put, call } from "redux-saga/effects";
import { deleteApiFailure, deleteApiSuccess } from "../Actions";
import { DELETE_API } from "../Services/Api/AxiosInstance";
import { API_ENDPOINTS } from "../Utils/Constant";
function* deleteApiSaga(action) {
  try {
    const res = yield call(
      DELETE_API,
      API_ENDPOINTS.DELETE_DATA,
      action.payload
    );
    yield put(deleteApiSuccess(res));
  } catch (error) {
    yield put(deleteApiFailure(error));
  }
}

export default deleteApiSaga;
