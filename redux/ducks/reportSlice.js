import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "report",
  initialState: { screen: "", text: "", report: false },
  reducers: {
    setReport(state, action) {
      return action.payload;
    },
  },
});
