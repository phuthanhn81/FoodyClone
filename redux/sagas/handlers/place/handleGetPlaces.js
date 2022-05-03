import { call, put } from "redux-saga/effects";

import { requestGetPlaces } from "../../requests/place/requestGetPlaces";
import placesReducer from "../../../ducks/placesSlice";

export function* handleGetPlaces(action) {
  try {
    const response = yield call(requestGetPlaces, action.payload);
    const { data } = response;
    yield put(placesReducer.actions.setPlaces(data));
  } catch (error) {
    console.log(error);
  }
}
