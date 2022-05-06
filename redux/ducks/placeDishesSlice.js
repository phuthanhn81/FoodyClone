import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "placeDishes",
  initialState: [],
  reducers: {
    getPlaceDishes() {},
    setPlaceDishes(state, action) {
      return action.payload;
    },
  },
});
