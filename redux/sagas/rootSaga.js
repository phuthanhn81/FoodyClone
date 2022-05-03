import { takeLatest } from "redux-saga/effects";

import { handleGetPlaces } from "./handlers/place/handleGetPlaces";
import { handleGetCities } from "./handlers/place/handleGetCities";
import { handleSetQueryCities } from "./handlers/place/handleSetQueryCities";

import placesReducer from "../ducks/placesSlice";
import citiesReducer from "../ducks/citiesSlice";
import queryCitiesReducer from "../ducks/queryCitiesSlice";

export function* rootSaga() {
  yield takeLatest(placesReducer.actions.getPlaces, handleGetPlaces);
  yield takeLatest(citiesReducer.actions.getCities, handleGetCities);
  yield takeLatest(
    queryCitiesReducer.actions.setQueryCities,
    handleSetQueryCities
  );
}
