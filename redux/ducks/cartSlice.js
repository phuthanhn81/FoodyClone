import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "cart",
  initialState: {
    total: 0,
    dishes: [],
  },
  reducers: {
    getCart() {},
    setCart(state, action) {
      return action.payload;
    },
    addCart() {},
    removeCart() {},
    ordersCart() {},
  },
});
