import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    setLoading(state, action) {
      return action.payload;
    },
  },
});
