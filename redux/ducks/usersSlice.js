import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "users",
  initialState: { statusLogin: 0 },
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    userLogin() {},
    userSignUp() {},
  },
});
