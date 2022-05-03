import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "places",
  initialState: [],
  reducers: {
    getPlaces() {},
    setPlaces(state, action) {
      return action.payload;
    },
  },
});
