import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    activePage: 1,
  },

  reducers: {
    activePageAction(state, action) {
      state.activePage = action.payload;
    },
    clearActivePageAction(state) {
      state.activePage = 1;
    },
  },
});

export const { activePageAction, clearActivePageAction } = generalSlice.actions;
export default generalSlice.reducer;
