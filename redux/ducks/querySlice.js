import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "query",
  initialState: {
    text: "",
    onPress: false,
  },
  reducers: {
    setQuery: (state, action) => {
      return action.payload;
    },
  },
});
