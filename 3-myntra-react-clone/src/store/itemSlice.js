import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addInitialsItems: (store, action) => {
      return action.payload;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
