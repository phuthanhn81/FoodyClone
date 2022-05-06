import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import placesReducer from "./ducks/placesSlice";
import citiesReducer from "./ducks/citiesSlice";
import queryCitiesReducer from "./ducks/queryCitiesSlice";
import queryReducer from "./ducks/querySlice";
import placeDishesReducer from "./ducks/placeDishesSlice";
import cartReducer from "./ducks/cartSlice";
import resultReducer from "./ducks/resultSlice";
import loadingReducer from "./ducks/loadingSlice";
import displayReducer from "./ducks/displaySlice";

import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const storeToolkit = configureStore({
  reducer: {
    result: resultReducer.reducer,
    display: displayReducer.reducer,
    loading: loadingReducer.reducer,

    places: placesReducer.reducer,
    cities: citiesReducer.reducer,
    queryCities: queryCitiesReducer.reducer,
    query: queryReducer.reducer,
    placeDishes: placeDishesReducer.reducer,
    cart: cartReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default storeToolkit;
