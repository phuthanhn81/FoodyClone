import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "queryCities",
  initialState: [],
  reducers: {
    getQueryCities() {},
    setQueryCities: (state, action) => {
      return action.payload;
    },
  },
});
