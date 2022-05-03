import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import placesReducer from "./ducks/placesSlice";
import citiesReducer from "./ducks/citiesSlice";
import queryCitiesReducer from "./ducks/queryCitiesSlice";
import queryReducer from "./ducks/querySlice";

import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const storeToolkit = configureStore({
  reducer: {
    places: placesReducer.reducer,
    cities: citiesReducer.reducer,
    queryCities: queryCitiesReducer.reducer,
    query: queryReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default storeToolkit;
