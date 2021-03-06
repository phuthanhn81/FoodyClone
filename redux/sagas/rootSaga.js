import { takeLatest } from "redux-saga/effects";

import {
  handleGetPlaces,
  handleGetPlaceDishes,
  handleAddCart,
  handleRemoveCart,
  handleOrdersCart,
} from "./handlers/place/handleGetPlaces";
import { handleGetCities } from "./handlers/place/handleGetCities";
import { handleSetQueryCities } from "./handlers/place/handleSetQueryCities";

import placesReducer from "../ducks/placesSlice";
import citiesReducer from "../ducks/citiesSlice";
import queryCitiesReducer from "../ducks/queryCitiesSlice";
import placeDishesReducer from "../ducks/placeDishesSlice";
import cartReducer from "../ducks/cartSlice";

export function* rootSaga() {
  yield takeLatest(placesReducer.actions.getPlaces, handleGetPlaces);
  yield takeLatest(citiesReducer.actions.getCities, handleGetCities);
  yield takeLatest(
    queryCitiesReducer.actions.setQueryCities,
    handleSetQueryCities
  );
  yield takeLatest(
    placeDishesReducer.actions.getPlaceDishes,
    handleGetPlaceDishes
  );
  yield takeLatest(cartReducer.actions.addCart, handleAddCart);
  yield takeLatest(cartReducer.actions.removeCart, handleRemoveCart);
  yield takeLatest(cartReducer.actions.ordersCart, handleOrdersCart);
}
