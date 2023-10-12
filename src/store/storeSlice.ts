import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

type StateType = {};

const storeSlice = createSlice({
  name: "store",
  initialState: {
    storeList: [{}],
  },
  reducers: {
    getStoreAction(state, action) {
      state.storeList = action.payload;
    },
    addStoreAction(state, action) {
      let temp = _.cloneDeep(state.storeList);
      temp.unshift(action.payload);
      state.storeList = temp;
    },
    updateStoreAction(state, action) {
      let temp = _.cloneDeep(state.storeList);
      temp[0] = action.payload;
      state.storeList = temp;
    },
    clearStoreAction(state) {
      state.storeList = [];
    },
  },
});
export const {
  getStoreAction,
  addStoreAction,
  updateStoreAction,
  clearStoreAction,
} = storeSlice.actions;
export default storeSlice.reducer;
