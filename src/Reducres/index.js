import { configureStore } from "../store";
import { combineReducers } from "redux";
import { getApiReducer } from "./getApiReducer";
import { postApiReducer } from "./postApiReducer";
import { putApiReducer } from "./putApiReducer";
import { deleteApiReducer } from "./deleteApiReducer";
import rootSaga from "../Sagas";

export const createStore = () => {
  const rootReducer = combineReducers({
    getApiReducer,
    postApiReducer,
    putApiReducer,
    deleteApiReducer,
  });
  return configureStore(rootReducer, rootSaga);
};
