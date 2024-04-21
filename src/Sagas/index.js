import { all, takeLatest } from "redux-saga/effects";
import {
  GET_API_REQUEST,
  DELETE_API_REQUEST,
  PUT_API_REQUEST,
  POST_API_REQUEST,
} from "../Utils/Constant";
import getApiSaga from "./getApiSagas";
import postApiSaga from "./postApiSagas";
import putApiSaga from "./putApiSagas";
import deleteApiSaga from "./deleteApiSagas";

export default function* root() {
  yield all([takeLatest(GET_API_REQUEST, getApiSaga)]);
  yield all([takeLatest(POST_API_REQUEST, postApiSaga)]);
  yield all([takeLatest(PUT_API_REQUEST, putApiSaga)]);
  yield all([takeLatest(DELETE_API_REQUEST, deleteApiSaga)]);
}
