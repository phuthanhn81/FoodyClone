import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "result",
  initialState: 0,
  reducers: {
    setResult(state, action) {
      return action.payload;
    },
  },
});
