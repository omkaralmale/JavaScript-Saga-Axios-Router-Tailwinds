import { put, call } from "redux-saga/effects";
import { postApiFailure, postApiSuccess } from "../Actions";
import { POST_API } from "../Services/Api/AxiosInstance";
import { API_ENDPOINTS } from "../Utils/Constant";
function* postApiSaga(action) {
  try {
    const res = yield call(POST_API, API_ENDPOINTS.POST_DATA, action.payload);
    yield put(postApiSuccess(res));
  } catch (error) {
    yield put(postApiFailure(error));
  }
}

export default postApiSaga;
