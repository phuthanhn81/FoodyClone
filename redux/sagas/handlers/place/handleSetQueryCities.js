import { put, select } from "redux-saga/effects";

import queryCitiesReducer from "../../../ducks/queryCitiesSlice";

export function* handleSetQueryCities(action) {
  try {
    const cities = yield select((state) => state.cities);
    let result = [];

    if (action.payload.text !== "" && !action.payload.onPress) {
      result = cities.filter((city) => {
        return city.name
          .toLowerCase()
          .includes(action.payload.text.toLowerCase());
      });
    }

    yield put(queryCitiesReducer.actions.setQueryCities(result));
  } catch (error) {
    // console.log("handleSetQueryCities");
  }
}
