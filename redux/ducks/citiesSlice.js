import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "cities",
  initialState: [],
  reducers: {
    getCities() {},
    setCities(state, action) {
      return action.payload;
    },
  },
});
