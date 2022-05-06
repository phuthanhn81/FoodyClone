import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "display",
  initialState: 0,
  reducers: {
    setDisplay(state, action) {
      return action.payload;
    },
  },
});
