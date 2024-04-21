import { put, call } from "redux-saga/effects";
import { putApiFailure, putApiSuccess } from "../Actions";
import { PUT_API } from "../Services/Api/AxiosInstance";
import { API_ENDPOINTS } from "../Utils/Constant";
function* putApiSaga(action) {
  try {
    const res = yield call(
      PUT_API,
      API_ENDPOINTS.PUT_DATA,
      action.payload.id,
      action.payload.body
    );
    yield put(putApiSuccess(res));
  } catch (error) {
    yield put(putApiFailure(error));
  }
}

export default putApiSaga;
