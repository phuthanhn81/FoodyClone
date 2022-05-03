import { call, put } from "redux-saga/effects";

import { requestGetCities } from "../../requests/place/requestGetCities";

import citiesReducer from "../../../ducks/citiesSlice";

export function* handleGetCities(action) {
  try {
    const response = yield call(requestGetCities);
    const { data } = response;
    yield put(citiesReducer.actions.setCities(data));
  } catch (error) {
    console.log(error);
  }
}
